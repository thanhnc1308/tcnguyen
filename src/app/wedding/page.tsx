import Navigation from '@/features/wedding/components/Navigation';
import Banner from '@/features/wedding/components/Banner';
import PhotoGallery from '@/features/wedding/components/PhotoGallery';
import WeddingMonetaryGift from '@/features/wedding/components/WeddingMonetaryGift';
import PostcardForm from '@/features/wedding/components/PostcardForm';
import WeddingGuestBook from '@/features/wedding/components/WeddingGuestBook';
import Footer from '@/features/wedding/components/Footer';
import EventInfo from '@/features/wedding/components/EventInfo';
import EventInfoV2 from '@/features/wedding/components/EventInfoV2';
import InvitationCard from '@/features/wedding/components/InvitationCard';

export default function Wedding() {
  return (
    <>
      <Navigation />
      <Banner />
      <InvitationCard />
      <PhotoGallery />
      <EventInfo />
      <EventInfoV2 />
      <WeddingMonetaryGift
        images={[
          {
            id: '1',
            title: 'QR chú rể',
            thumbnailUrl: '/images/groom.png',
            fullImageUrl: '/images/groom.png',
            alt: 'QR chú rể',
          },
          {
            id: '2',
            title: 'QR cô dâu',
            thumbnailUrl: '/images/bride.png',
            fullImageUrl: '/images/bride.png',
            alt: 'QR cô dâu',
          },
        ]}
      />
      <PostcardForm />
      <WeddingGuestBook />
      <Footer />
    </>
  );
}
