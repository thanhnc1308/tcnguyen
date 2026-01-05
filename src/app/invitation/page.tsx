import Navigation from '@/features/invitation/components/Navigation';
import Banner from '@/features/invitation/components/Banner';
import PhotoGallery from '@/features/invitation/components/PhotoGallery';
import WeddingMonetaryGift from '@/features/invitation/components/WeddingMonetaryGift';
import PostcardForm from '@/features/invitation/components/PostcardForm';
import WeddingGuestBook from '@/features/invitation/components/WeddingGuestBook';
import Footer from '@/features/invitation/components/Footer';
import EventInfo from '@/features/invitation/components/EventInfo';
import EventInfoV2 from '@/features/invitation/components/EventInfoV2';
import Envelop from '@/features/invitation/components/Envelop';

export default function GeneralInvitation() {
  return (
    <>
      <Envelop />
      <Navigation />
      <Banner />
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
