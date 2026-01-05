'use client';

import { Box, Typography, Container } from '@mui/material';

interface EnvelopProps {
  groomName?: string;
  brideName?: string;
  guestName?: string;
  onOpenInvitation?: () => void;
}

export default function Envelop({
  groomName = 'Thành',
  brideName = 'Mến',
  onOpenInvitation,
}: EnvelopProps) {
  const handleOpenInvitation = () => {
    if (onOpenInvitation) {
      onOpenInvitation();
    } else {
      // Default behavior - could navigate to invitation page
      console.log('Opening wedding invitation...');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #D93C3C 0%, #E05555 50%, #D93C3C 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        position: 'relative',
      }}
    >
      <Container maxWidth='sm'>
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: { xs: 4, sm: 6 },
            paddingBottom: 0,
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Header Text */}
          <Typography
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 300,
              letterSpacing: '0.3em',
              color: 'rgba(255, 255, 255, 0.95)',
              mb: 4,
              textTransform: 'uppercase',
            }}
          >
            Bạn nhận được thư của
          </Typography>

          {/* Couple Names */}
          <Typography
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontFamily: 'Allison',
              color: '#FFF8DC',
              mb: 6,
              // lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {groomName} & {brideName}
          </Typography>

          {/* Envelope with Open Text */}
          <Box
            sx={{
              position: 'relative',
              maxWidth: '400px',
              margin: '0 auto',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              marginTop: { xs: 2, sm: 3 },
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}
            onClick={handleOpenInvitation}
          >
            {/* Envelope Image */}
            <Box
              component='img'
              src='/images/envelop.png'
              alt='Wedding Invitation Envelope'
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />

            {/* Open Envelop Text */}
            <Box
              sx={{
                position: 'absolute',
                bottom: '65%',
                left: '53%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '120px',
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    fontWeight: 600,
                    color: '#000',
                    textTransform: 'none',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Mở thư
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
