import Navigation from '@/components/wedding/Navigation';
import Banner from '@/components/wedding/Banner';
import PhotoGallery from '@/components/wedding/PhotoGallery';
import WeddingMonetaryGift from '@/components/wedding/WeddingMonetaryGift';
import PostcardForm from '@/components/wedding/PostcardForm';
import WeddingGuestBook from '@/components/wedding/WeddingGuestBook';

export default function Wedding() {
  return (
    <>
      <Navigation />
      <Banner />
      <PhotoGallery />
      <div>Events schedule</div>
      <div>Map/location</div>
      <WeddingMonetaryGift />
      <PostcardForm />
      <WeddingGuestBook />
    </>
  );
}
