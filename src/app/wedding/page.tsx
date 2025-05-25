import Navigation from '@/components/wedding/Navigation';
import Banner from '@/components/wedding/Banner';
import PhotoGallery from '@/components/wedding/PhotoGallery';
import WeddingMonetaryGift from '@/components/wedding/WeddingMonetaryGift';
import PostcardForm from '@/components/wedding/PostcardForm';
import WeddingGuestBook from '@/components/wedding/WeddingGuestBook';
import Footer from '@/components/wedding/Footer';
import EventInfo from '@/components/wedding/EventInfo';
import EventInfoV2 from '@/components/wedding/EventInfoV2';
import InvitationCard from '@/components/wedding/InvitationCard';

export default function Wedding() {
  return (
    <>
      <Navigation />
      <Banner />
      <InvitationCard />
      <PhotoGallery />
      <EventInfo />
      <EventInfoV2 />
      <WeddingMonetaryGift />
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
