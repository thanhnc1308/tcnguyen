'use client';

import type React from 'react';
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  styled,
  CircularProgress,
} from '@mui/material';
import { Guest } from '@/types/guest';
import { getGuestPronoun } from '../helpers/guest';
import { capitalizeFirstLetter } from '@/utils';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';
import { COLORS, FONTS, TRANSITIONS } from '../constants/design';
import OrnamentalDivider from './OrnamentalDivider';
import ScrollReveal from './ScrollReveal';

const FormContainer = styled(Box)(() => ({
  backgroundColor: COLORS.bgCard,
  padding: '48px 36px',
  maxWidth: '600px',
  margin: '0 auto',
  border: `1px solid ${COLORS.borderGold}`,
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(250, 250, 250, 0.04)',
    borderRadius: 0,
    fontFamily: FONTS.body,
    color: COLORS.textPrimary,
    fontSize: '0.9rem',
    '& fieldset': {
      borderColor: COLORS.borderGold,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: COLORS.borderGoldHover,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.accent,
      borderWidth: '1px',
    },
  },
  '& .MuiInputBase-input': {
    color: COLORS.textPrimary,
    fontFamily: FONTS.body,
    '&::placeholder': {
      color: COLORS.textSecondary,
      opacity: 1,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: FONTS.body,
    color: COLORS.textSecondary,
  },
}));

const SubmitButton = styled(Button)(() => ({
  backgroundColor: COLORS.accent,
  color: COLORS.textOnPrimary,
  fontWeight: 600,
  fontSize: '0.75rem',
  padding: '14px 24px',
  borderRadius: 0,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontFamily: FONTS.body,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: COLORS.accentDark,
    boxShadow: '0 4px 20px rgba(198, 169, 97, 0.3)',
  },
  transition: `all ${TRANSITIONS.normal} ease`,
}));

interface InvitationResponseProps {
  guest: Guest | null;
  onSuccess?: () => void;
}

export default function InvitationResponse({
  guest,
  onSuccess,
}: InvitationResponseProps) {
  const [name, setName] = useState(guest?.name || '');
  const [numberOfGuests, setNumberOfGuests] = useState(
    guest?.memberCount?.toString() || '',
  );
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isKnownGuest = guest !== null;
  const guestPronoun = getGuestPronoun(guest);

  const utils = trpc.useUtils();

  const submitMutation = trpc.invitation.submitResponse.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success('Cảm ơn bạn đã phản hồi!');
      utils.invitation.getResponses.invalidate();
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(error.message || 'Có lỗi xảy ra, vui lòng thử lại.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      guestId: guest?._id,
      name,
      numberOfGuests: parseInt(numberOfGuests) || 1,
      message: message || undefined,
    });
  };

  if (isSubmitted) {
    return (
      <Box id='rsvp' sx={{ backgroundColor: COLORS.bgBlack, py: { xs: 4, md: 6 } }}>
        <FormContainer>
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <OrnamentalDivider width={120} />
              <Typography
                sx={{
                  fontFamily: FONTS.serif,
                  fontSize: '2rem',
                  color: COLORS.accent,
                  mt: 3,
                  mb: 2,
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                Cảm ơn bạn đã phản hồi!
              </Typography>
              <Typography
                sx={{
                  color: COLORS.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  fontFamily: FONTS.body,
                  fontWeight: 300,
                }}
              >
                Chúng mình rất vui khi nhận được phản hồi của bạn.
                <br />
                Hẹn gặp bạn trong ngày vui của chúng mình nhé!
              </Typography>
              <OrnamentalDivider width={120} />
            </Box>
          </ScrollReveal>
        </FormContainer>
      </Box>
    );
  }

  return (
    <Box id='rsvp' sx={{ backgroundColor: COLORS.bgBlack, py: { xs: 4, md: 6 } }}>
      <FormContainer>
        <ScrollReveal>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
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
              RSVP
            </Typography>

            {!isKnownGuest && (
              <Typography
                sx={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.8rem',
                  color: COLORS.textPrimary,
                  lineHeight: 1.4,
                  fontWeight: 300,
                  fontStyle: 'italic',
                }}
              >
                Cho chúng mình biết bạn có tham
                <br />
                dự được không nha.
              </Typography>
            )}

            {isKnownGuest && (
              <Typography
                sx={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.8rem',
                  color: COLORS.textPrimary,
                  lineHeight: 1.4,
                  fontWeight: 300,
                  fontStyle: 'italic',
                }}
              >
                {capitalizeFirstLetter(guestPronoun)} {name} cho chúng mình biết
                bạn có tham
                <br />
                dự được không nha.
              </Typography>
            )}
          </Box>

          {/* Divider */}
          <Box sx={{ mb: 4 }}>
            <OrnamentalDivider width={180} />
          </Box>

          <Box component='form' onSubmit={handleSubmit}>
            {/* Name Field */}
            {!isKnownGuest && (
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 500,
                    color: COLORS.textSecondary,
                    fontSize: '0.75rem',
                    fontFamily: FONTS.body,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Cho chúng mình xin tên của bạn nhé?*
                </Typography>
                <StyledTextField
                  fullWidth
                  variant='outlined'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Nhập họ và tên'
                  size='medium'
                  required
                />
              </Box>
            )}

            {/* Number of Guests Field */}
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 500,
                  color: COLORS.textSecondary,
                  fontSize: '0.75rem',
                  fontFamily: FONTS.body,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Số lượng người tham gia?*
              </Typography>
              <StyledTextField
                fullWidth
                variant='outlined'
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                placeholder='Ví dụ: 1'
                size='medium'
                type='number'
                required
                slotProps={{ htmlInput: { min: 1 } }}
              />
            </Box>

            {/* Message Field */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 500,
                  color: COLORS.textSecondary,
                  fontSize: '0.75rem',
                  fontFamily: FONTS.body,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Lời nhắn / lời chúc
              </Typography>
              <StyledTextField
                fullWidth
                variant='outlined'
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Lời chúc...'
                size='medium'
              />
            </Box>

            {/* Submit Button */}
            <Box sx={{ textAlign: 'center' }}>
              <SubmitButton
                type='submit'
                variant='contained'
                fullWidth
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? (
                  <CircularProgress
                    size={20}
                    sx={{ color: COLORS.textOnPrimary }}
                  />
                ) : (
                  'Gửi phản hồi'
                )}
              </SubmitButton>
            </Box>
          </Box>
        </ScrollReveal>
      </FormContainer>
    </Box>
  );
}
