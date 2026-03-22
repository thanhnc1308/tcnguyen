import { auth } from '@/auth';
import guestModel from '@/server/db/models/guest.model';
import {
  GuestAgeComparison,
  GuestConfirmationStatus,
  GuestGender,
  GuestSource,
} from '@/types/guest';
import { hash } from '@/utils';
import { getUserRoleFromEmail } from '@/utils/auth';
import { UserRole } from '@/types/auth';
import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (
      !session?.user?.email ||
      getUserRoleFromEmail(session.user.email) !== UserRole.Admin
    ) {
      return NextResponse.json('Forbidden', { status: 403 });
    }

    const data = await req.formData();
    const file = data.get('file') as File;

    if (!file) {
      return NextResponse.json('No file uploaded', {
        status: 400,
      });
    }

    const { name } = file;
    const guestSource = name.includes('groom')
      ? GuestSource.Groom
      : GuestSource.Bride;

    const text = await file.text();
    const { data: parsedData } = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
    });

    const ageComparisonMap: Record<string, GuestAgeComparison> = {
      Older: GuestAgeComparison.Older,
      Younger: GuestAgeComparison.Younger,
      Same: GuestAgeComparison.Same,
      Teacher: GuestAgeComparison.Teacher,
    };

    const genderMap: Record<string, GuestGender> = {
      Male: GuestGender.Male,
      Female: GuestGender.Female,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validRows = parsedData.filter((row: any) => row.GuestName?.trim());

    let currentGroup: string | undefined;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newGuests = validRows.map((row: any) => {
      const name = row.GuestName.trim();
      const group = row.Group?.trim();
      if (group) currentGroup = group;

      const memberCount = parseInt(row.Quantiy) || 1;
      const invited = row.Invited?.trim().toLowerCase() === 'true';
      const ageComparison =
        ageComparisonMap[row.AgeComparison?.trim()] ?? GuestAgeComparison.Same;
      const gender = genderMap[row.Gender?.trim()];

      return {
        _id: hash(`${guestSource}-${name}`),
        name,
        group: currentGroup,
        memberCount,
        status: GuestConfirmationStatus.Pending,
        invited,
        guestSource,
        ageComparison,
        ...(gender && { gender }),
      };
    });

    await guestModel.bulkWrite(
      newGuests.map((guest) => ({
        updateOne: {
          filter: { _id: guest._id },
          update: { $set: guest },
          upsert: true,
        },
      })),
    );

    return NextResponse.json('Successfully import', {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json('Error uploading file', {
      status: 500,
    });
  }
}
