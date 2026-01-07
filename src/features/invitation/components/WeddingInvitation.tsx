'use client';

import { useState } from 'react';
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
import { Box, Fade, Grow } from '@mui/material';
import { Guest } from '@/types/guest';
import { WeddingInvitationContext } from '@/features/invitation/context/WeddingInvitationContext';

export default function WeddingInvitation({ guest }: { guest: Guest | null }) {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
  };

  const shouldShowEnvelop = guest !== null && !isInvitationOpened;
  const shouldShowContent = guest === null || isInvitationOpened;

  return (
    <WeddingInvitationContext.Provider
      value={{ isInvitationOpened, handleOpenInvitation }}
    >
      <Fade in={shouldShowEnvelop} timeout={800} unmountOnExit>
        <Box>
          <Envelop guest={guest} />
        </Box>
      </Fade>

      <Grow
        in={shouldShowContent}
        timeout={1000}
        style={{ transformOrigin: '0 0 0' }}
        unmountOnExit
      >
        <Box>
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
        </Box>
      </Grow>
    </WeddingInvitationContext.Provider>
  );
}
