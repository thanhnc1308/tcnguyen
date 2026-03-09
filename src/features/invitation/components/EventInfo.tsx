'use client';

import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Divider,
  Button,
  Chip,
} from '@mui/material';
import {
  LocationOn,
  AccessTime,
  Directions,
  Event,
  Restaurant,
} from '@mui/icons-material';
import { months, weekdays } from '../constants';
import {
  COLORS,
  FONTS,
  cardStyle,
  primaryButtonStyle,
  sectionHeadingStyle,
} from '../constants/design';
import { getEventsForSide } from '../constants/events';
import ScrollReveal from './ScrollReveal';
import { GuestSource } from '@/types/guest';

interface EventInfoProps {
  side?: GuestSource;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function EventInfo({
  side = GuestSource.Groom,
  title = 'Sự Kiện',
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
        position: 'relative',
        backgroundColor: COLORS.bgBlack,
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                fontFamily: FONTS.body,
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: COLORS.accent,
                mb: 2,
                fontWeight: 500,
              }}
            >
              Save the date
            </Typography>
            <Typography variant='h2' component='h2' sx={sectionHeadingStyle}>
              {title}
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Events Grid */}
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={event.id}>
              <ScrollReveal delay={index * 0.2}>
                <Card
                  sx={{
                    height: '100%',
                    ...cardStyle,
                    borderRadius: 1,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Event Type Badge */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 3,
                      }}
                    >
                      <Chip
                        icon={
                          event.type === 'ceremony' ? <Event /> : <Restaurant />
                        }
                        label={
                          event.type === 'ceremony'
                            ? 'LỄ THÀNH HÔN'
                            : 'TIỆC CƯỚI'
                        }
                        sx={{
                          backgroundColor: 'rgba(198, 169, 97, 0.1)',
                          color: COLORS.accent,
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          fontFamily: FONTS.body,
                          letterSpacing: '0.1em',
                          borderRadius: 0,
                          '& .MuiChip-icon': {
                            color: COLORS.accent,
                          },
                        }}
                      />
                    </Box>

                    {/* Event Title */}
                    <Typography
                      variant='h4'
                      component='h3'
                      sx={{
                        fontFamily: FONTS.serif,
                        color: COLORS.textPrimary,
                        fontWeight: 400,
                        mb: 2,
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                      }}
                    >
                      {event.title}
                    </Typography>

                    {/* Date and Time */}
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                      >
                        <Event
                          sx={{ color: COLORS.accent, mr: 1, fontSize: 18 }}
                        />
                        <Typography
                          variant='body1'
                          sx={{
                            color: COLORS.textPrimary,
                            fontWeight: 500,
                            fontFamily: FONTS.body,
                            fontSize: '0.9rem',
                          }}
                        >
                          {formatDate(event.date)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', ml: 3.5 }}
                      >
                        <AccessTime
                          sx={{ color: COLORS.accent, mr: 1, fontSize: 16 }}
                        />
                        <Typography
                          variant='body2'
                          sx={{
                            color: COLORS.textSecondary,
                            fontFamily: FONTS.body,
                            fontSize: '0.85rem',
                          }}
                        >
                          {event.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: COLORS.borderGold }} />

                    {/* Venue Information */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant='h6'
                        sx={{
                          color: COLORS.textPrimary,
                          fontWeight: 600,
                          mb: 1,
                          fontSize: '1rem',
                          fontFamily: FONTS.body,
                        }}
                      >
                        {event.venue}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 2,
                        }}
                      >
                        <LocationOn
                          sx={{
                            color: COLORS.accent,
                            mr: 1,
                            fontSize: 18,
                            mt: 0.2,
                          }}
                        />
                        <Typography
                          variant='body2'
                          sx={{
                            color: COLORS.textSecondary,
                            lineHeight: 1.6,
                            flex: 1,
                            fontFamily: FONTS.body,
                            fontSize: '0.85rem',
                          }}
                        >
                          {event.address}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Responsive Map */}
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        borderRadius: 1,
                        overflow: 'hidden',
                        mb: 2,
                        border: `1px solid ${COLORS.borderGold}`,
                      }}
                    >
                      {event.embededIframe}
                    </Box>

                    {/* Directions Button */}
                    <Button
                      variant='contained'
                      startIcon={<Directions />}
                      onClick={() =>
                        handleDirections(event.address, event.mapUrl)
                      }
                      fullWidth
                      sx={primaryButtonStyle}
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
