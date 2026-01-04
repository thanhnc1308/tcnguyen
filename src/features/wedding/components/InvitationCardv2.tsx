'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

interface InvitationCardProps {
  groomName?: string;
  brideName?: string;
  guestName?: string;
  onOpenInvitation?: () => void;
  backgroundColor?: string;
  buttonColor?: string;
}

export default function InvitationCard({
  groomName = 'Thành',
  brideName = 'Mến',
  guestName = 'Quý khách',
  onOpenInvitation,
  backgroundColor = '#f5f5f5',
  buttonColor = '#c2185b',
}: InvitationCardProps) {
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
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth='sm'>
        <Box
          sx={{
            textAlign: 'center',
            px: { xs: 3, sm: 6 },
            py: { xs: 6, sm: 8 },
          }}
        >
          {/* Header */}
          <Typography
            variant='h6'
            component='h1'
            sx={{
              color: '#757575',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              letterSpacing: '2px',
              textTransform: 'uppercase',
              mb: 4,
            }}
          >
            Trân Trọng Kính Mời
          </Typography>

          {/* Guest Name */}
          <Typography
            variant='h6'
            component='h1'
            sx={{
              color: '#757575',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              letterSpacing: '2px',
              textTransform: 'uppercase',
              mb: 4,
            }}
          >
            {guestName}
          </Typography>

          {/* Message */}
          <Typography
            variant='body1'
            sx={{
              color: '#616161',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: 480,
              mx: 'auto',
              mb: 5,
            }}
          >
            Đến dự bữa tiệc thân mật chung vui cùng gia đình chúng tôi mừng lễ
            thành hôn
          </Typography>

          {/* Couple Names */}
          <Typography
            variant='h2'
            component='h2'
            sx={{
              color: '#212121',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {groomName} & {brideName}
          </Typography>

          {/* Open Invitation Button */}
          <Button
            variant='contained'
            onClick={handleOpenInvitation}
            endIcon={<ArrowForward />}
            sx={{
              backgroundColor: buttonColor,
              color: 'white',
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'none',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 12px rgba(194, 24, 91, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#ad1457',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(194, 24, 91, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            Mở Thiệp
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
