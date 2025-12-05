'use client';

import type React from 'react';

import {
  Box,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocationOn,
  Schedule,
  Event,
  Restaurant,
  People,
} from '@mui/icons-material';

interface TimelineEvent {
  time: string;
  title: string;
  icon: React.ReactNode;
}

interface EventInfoV2Props {
  city?: string;
  time?: string;
  date?: string;
  lunarDate?: string;
  eventType?: string;
  venueName?: string;
  venueDetails?: string;
  address?: string;
  mapImage?: string;
  timeline?: TimelineEvent[];
  onAddToCalendar?: () => void;
}

export default function EventInfoV2({
  city = 'Biên Hòa',
  time = '11:00',
  date = 'Thứ Bảy - 13/01/2024',
  lunarDate = 'nhằm ngày 03 tháng 12 năm Quý Mão',
  eventType = 'Trung Tâm Hội Nghị - Tiệc Cưới',
  venueName = 'Eros Palace Luxury',
  venueDetails = 'Sảnh Pacific - Tầng trệt',
  address = '15 Đông Khởi, Khu Phố 6, TP. Biên Hòa, Đồng Nai',
  mapImage = '/wedding-map.png',
  timeline = [
    {
      time: '11:00',
      title: 'Đón khách',
      icon: <People sx={{ fontSize: 20 }} />,
    },
    {
      time: '12:00',
      title: 'Lễ cưới',
      icon: <Event sx={{ fontSize: 20 }} />,
    },
    {
      time: '12:15',
      title: 'Đãi tiệc',
      icon: <Restaurant sx={{ fontSize: 20 }} />,
    },
  ],
  onAddToCalendar,
}: EventInfoV2Props) {
  const handleAddToCalendar = () => {
    if (onAddToCalendar) {
      onAddToCalendar();
    } else {
      // Default calendar integration
      const startDate = new Date('2024-01-13T11:00:00');
      const endDate = new Date('2024-01-13T15:00:00');
      const title = `Tiệc cưới tại ${venueName}`;
      const details = `${eventType}\n${address}`;

      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title,
      )}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${
        endDate.toISOString().replace(/[-:]/g, '').split('.')[0]
      }Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(address)}`;

      window.open(googleCalendarUrl, '_blank');
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: 'auto',
        backgroundColor: '#f5f1e8',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        border: '2px solid #8b4513',
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Header - City */}
        <Box
          sx={{
            backgroundColor: '#8b4513',
            color: 'white',
            py: 1.5,
            px: 3,
            textAlign: 'center',
            mb: 3,
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '1px',
            }}
          >
            {city}
          </Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{ px: 3, pb: 3 }}>
          {/* Time */}
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              color: '#5d4037',
              fontWeight: 700,
              mb: 2,
              fontSize: '2.5rem',
            }}
          >
            {time}
          </Typography>

          {/* Date */}
          <Box sx={{ textAlign: 'center', mb: 1 }}>
            <Typography
              variant='h6'
              sx={{
                color: '#5d4037',
                fontWeight: 600,
                fontSize: '1.1rem',
                mb: 0.5,
              }}
            >
              {date}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: '#8b4513',
                fontStyle: 'italic',
                fontSize: '0.85rem',
              }}
            >
              {lunarDate}
            </Typography>
          </Box>

          {/* Decorative Divider */}
          <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
            <Divider sx={{ flex: 1, borderColor: '#8b4513' }} />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#8b4513',
                mx: 2,
              }}
            />
            <Divider sx={{ flex: 1, borderColor: '#8b4513' }} />
          </Box>

          {/* Event Type */}
          <Typography
            variant='body1'
            sx={{
              textAlign: 'center',
              color: '#6b4423',
              fontSize: '0.9rem',
              mb: 2,
            }}
          >
            {eventType}
          </Typography>

          {/* Venue Name */}
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              color: '#8b4513',
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '1.8rem', sm: '2rem' },
              lineHeight: 1.2,
            }}
          >
            {venueName}
          </Typography>

          {/* Venue Details */}
          <Typography
            variant='body1'
            sx={{
              textAlign: 'center',
              color: '#6b4423',
              fontSize: '1rem',
              mb: 3,
            }}
          >
            {venueDetails}
          </Typography>
        </Box>

        {/* Address Section */}
        <Box
          sx={{
            backgroundColor: '#8b4513',
            color: 'white',
            py: 2,
            px: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant='body1'
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {address}
          </Typography>
        </Box>

        {/* Map Section */}
        <Box
          sx={{
            position: 'relative',
            height: 200,
            backgroundImage: `url('${mapImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
          />
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <LocationOn sx={{ fontSize: 40, mb: 1, color: '#ff4444' }} />
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              {venueName}
            </Typography>
          </Box>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ backgroundColor: '#f8f4e6', py: 3, px: 3 }}>
          {timeline.map((event, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index < timeline.length - 1 ? 2 : 0,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#8b4513',
                  color: 'white',
                  mr: 2,
                }}
              >
                {event.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#5d4037',
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 0.5,
                  }}
                >
                  {event.time}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#6b4423',
                    fontSize: '0.9rem',
                  }}
                >
                  {event.title}
                </Typography>
              </Box>
              {index < timeline.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 43,
                    mt: 5,
                    width: 2,
                    height: 20,
                    backgroundColor: '#d4af37',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

        {/* Add to Calendar Button */}
        <Box sx={{ p: 3, pt: 2 }}>
          <Button
            variant='contained'
            fullWidth
            onClick={handleAddToCalendar}
            startIcon={<Schedule />}
            sx={{
              backgroundColor: '#8b4513',
              color: 'white',
              borderRadius: 2,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#6b4423',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(139, 69, 19, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Thêm vào Lịch
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
