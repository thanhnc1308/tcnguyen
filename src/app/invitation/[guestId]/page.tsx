import WeddingInvitation from '@/features/invitation/components/WeddingInvitation';

type GuestInvitationPageProps = {
  params: Promise<{
    guestId: string;
  }>;
};

export default async function GuestInvitation({
  params,
}: GuestInvitationPageProps) {
  const { guestId } = await params;
  console.log('Guest ID:', guestId);

  return <WeddingInvitation />;
}
