import WeddingInvitation from '@/features/invitation/components/WeddingInvitation';
import { getGuestById } from '@/server/services/guest.service';
import { GuestConfirmationStatus, GuestSource } from '@/types/guest';

type GuestInvitationPageProps = {
  params: Promise<{
    guestId: string;
  }>;
};

export default async function GuestInvitation({
  params,
}: GuestInvitationPageProps) {
  const { guestId } = await params;
  // const guest = await getGuestById(guestId);

  const guest = {
    _id: 'sample-id',
    name: 'Sample Guest',
    status: GuestConfirmationStatus.Pending,
    memberCount: 1,
    invited: false,
    guestSource: GuestSource.Groom,
  };

  return <WeddingInvitation guest={guest} />;
}
