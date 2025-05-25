import Navigation from '@/components/wedding/Navigation';
import Banner from '@/components/wedding/Banner';
import PhotoGallery from '@/components/wedding/PhotoGallery';
import WeddingMonetaryGift from '@/components/wedding/WeddingMonetaryGift';
import PostcardForm from '@/components/wedding/PostcardForm';
import WeddingGuestBook from '@/components/wedding/WeddingGuestBook';
import Footer from '@/components/wedding/Footer';
import EventInfo from '@/components/wedding/EventInfo';
import EventInfoV2 from '@/components/wedding/EventInfoV2';

export default function Wedding() {
  return (
    <>
      <Navigation />
      <Banner />
      <PhotoGallery />
      <EventInfo />
      <EventInfoV2 />
      <WeddingMonetaryGift />
      <PostcardForm />
      <WeddingGuestBook />
      <Footer />
    </>
  );
}
