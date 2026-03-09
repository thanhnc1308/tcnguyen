'use client';

import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import { Directions } from '@mui/icons-material';
import { months, weekdays } from '../constants';
import {
  COLORS,
  FONTS,
  sectionHeadingStyle,
} from '../constants/design';
import { getEventsForSide } from '../constants/events';
import ScrollReveal from './ScrollReveal';
import OrnamentalDivider from './OrnamentalDivider';
import { GuestSource } from '@/types/guest';

interface EventInfoProps {
  side?: GuestSource;
  title?: string;
}

export default function EventInfo({
  side = GuestSource.Groom,
  title = 'Thông Tin Sự Kiện',
}: EventInfoProps) {
  const events = getEventsForSide(side);
  const handleDirections = (address: string, mapUrl?: string) => {
    if (mapUrl) {
      window.open(mapUrl, '_blank');
    } else {
      const encodedAddress = encodeURIComponent(address);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
        '_blank',
      );
    }
  };

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.');
    const date = new Date(
      Number.parseInt(year),
      Number.parseInt(month) - 1,
      Number.parseInt(day),
    );

    const weekday = weekdays[date.getDay()];
    const dayNum = date.getDate();
    const monthName = months[date.getMonth()];
    const yearNum = date.getFullYear();

    return `${weekday}, ${dayNum} ${monthName}, ${yearNum}`;
  };

  return (
    <Box
      id='event'
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: COLORS.bgCream,
      }}
    >
      <Container maxWidth='md'>
        {/* Header */}
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant='h2' component='h2' sx={sectionHeadingStyle}>
              {title}
            </Typography>
            <OrnamentalDivider />
          </Box>
        </ScrollReveal>

        {/* Events */}
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={event.id}>
              <ScrollReveal delay={index * 0.15}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: COLORS.bgWhite,
                    borderRadius: 0,
                    boxShadow: 'none',
                    border: `1px solid ${COLORS.borderGold}`,
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    {/* Event type label */}
                    <Typography
                      sx={{
                        fontFamily: FONTS.body,
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: COLORS.accent,
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      {event.type === 'ceremony' ? 'Lễ thành hôn' : 'Tiệc cưới'}
                    </Typography>

                    {/* Event Title */}
                    <Typography
                      variant='h4'
                      component='h3'
                      sx={{
                        fontFamily: FONTS.serif,
                        color: COLORS.textPrimary,
                        fontWeight: 400,
                        mb: 3,
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                      }}
                    >
                      {event.title}
                    </Typography>

                    {/* Date */}
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        sx={{
                          color: COLORS.textPrimary,
                          fontFamily: FONTS.body,
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        {formatDate(event.date)}
                      </Typography>
                    </Box>

                    {/* Time */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          color: COLORS.textSecondary,
                          fontFamily: FONTS.body,
                          fontSize: '0.85rem',
                        }}
                      >
                        {event.time}
                      </Typography>
                    </Box>

                    {/* Thin rule */}
                    <Box sx={{ width: 40, height: '1px', backgroundColor: COLORS.accent, opacity: 0.3, mb: 3 }} />

                    {/* Venue */}
                    <Typography
                      sx={{
                        color: COLORS.textPrimary,
                        fontWeight: 500,
                        mb: 0.5,
                        fontSize: '0.95rem',
                        fontFamily: FONTS.body,
                      }}
                    >
                      {event.venue}
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.textSecondary,
                        lineHeight: 1.6,
                        fontFamily: FONTS.body,
                        fontSize: '0.85rem',
                        mb: 3,
                      }}
                    >
                      {event.address}
                    </Typography>

                    {/* Map */}
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        overflow: 'hidden',
                        mb: 3,
                        border: `1px solid ${COLORS.borderGold}`,
                      }}
                    >
                      {event.embededIframe}
                    </Box>

                    {/* Directions Button */}
                    <Button
                      variant='outlined'
                      startIcon={<Directions sx={{ fontSize: 18 }} />}
                      onClick={() =>
                        handleDirections(event.address, event.mapUrl)
                      }
                      fullWidth
                      sx={{
                        borderColor: COLORS.textSecondary,
                        color: COLORS.textPrimary,
                        borderRadius: 0,
                        py: 1.2,
                        fontWeight: 400,
                        textTransform: 'none',
                        fontSize: '0.85rem',
                        fontFamily: FONTS.body,
                        letterSpacing: '0.05em',
                        boxShadow: 'none',
                        '&:hover': {
                          borderColor: COLORS.textPrimary,
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      Xem đường đi
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
