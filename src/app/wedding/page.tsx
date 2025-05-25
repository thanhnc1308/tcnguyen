import Navigation from '@/components/wedding/Navigation';
import Banner from '@/components/wedding/Banner';
import PostcardForm from '@/components/wedding/PostcardForm';

export default function Wedding() {
  return (
    <>
      <Navigation />
      <Banner />
      <div>Videos/photos album</div>
      <div>Events schedule</div>
      <div>Map/location</div>
      <div>Wedding monetary gift QR</div>
      <PostcardForm />
    </>
  );
}
