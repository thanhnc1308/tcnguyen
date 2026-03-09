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
import { COLORS, FONTS } from '../constants/design';
import OrnamentalDivider from './OrnamentalDivider';
import ScrollReveal from './ScrollReveal';

const FormContainer = styled(Box)(() => ({
  backgroundColor: COLORS.bgWhite,
  padding: '48px 32px',
  maxWidth: '520px',
  margin: '0 auto',
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: COLORS.bgWhite,
    borderRadius: 0,
    fontFamily: FONTS.body,
    fontSize: '0.9rem',
    '& fieldset': {
      borderColor: COLORS.borderGold,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: COLORS.borderGoldHover,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.textPrimary,
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
  },
}));

const SubmitButton = styled(Button)(() => ({
  backgroundColor: COLORS.primary,
  color: COLORS.textOnPrimary,
  fontWeight: 400,
  fontSize: '0.8rem',
  padding: '14px 24px',
  borderRadius: 0,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontFamily: FONTS.body,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: COLORS.primaryDark,
    boxShadow: 'none',
  },
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
      <Box id='rsvp' sx={{ py: { xs: 10, md: 14 }, backgroundColor: COLORS.bgWhite }}>
        <FormContainer>
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <OrnamentalDivider />
              <Typography
                sx={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.8rem',
                  color: COLORS.textPrimary,
                  fontWeight: 300,
                  mt: 3,
                  mb: 2,
                  lineHeight: 1.4,
                }}
              >
                Cảm ơn bạn!
              </Typography>
              <Typography
                sx={{
                  color: COLORS.textSecondary,
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  fontFamily: FONTS.body,
                }}
              >
                Chúng mình rất vui khi nhận được phản hồi của bạn.
                <br />
                Hẹn gặp bạn trong ngày vui nhé!
              </Typography>
            </Box>
          </ScrollReveal>
        </FormContainer>
      </Box>
    );
  }

  return (
    <Box id='rsvp' sx={{ py: { xs: 10, md: 14 }, backgroundColor: COLORS.bgWhite }}>
      <FormContainer>
        <ScrollReveal>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              sx={{
                fontFamily: FONTS.serif,
                fontSize: '1.8rem',
                color: COLORS.textPrimary,
                fontWeight: 300,
                mb: 2,
                lineHeight: 1.3,
              }}
            >
              {isKnownGuest
                ? `${capitalizeFirstLetter(guestPronoun)} ${name}, cho chúng mình biết bạn có tham dự được không nha.`
                : 'Cho chúng mình biết bạn có tham dự được không nha.'}
            </Typography>
            <OrnamentalDivider width={80} />
          </Box>

          <Box component='form' onSubmit={handleSubmit}>
            {/* Name Field */}
            {!isKnownGuest && (
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 400,
                    color: COLORS.textSecondary,
                    fontSize: '0.8rem',
                    fontFamily: FONTS.body,
                    letterSpacing: '0.05em',
                  }}
                >
                  Tên của bạn *
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
                  fontWeight: 400,
                  color: COLORS.textSecondary,
                  fontSize: '0.8rem',
                  fontFamily: FONTS.body,
                  letterSpacing: '0.05em',
                }}
              >
                Số lượng người tham gia *
              </Typography>
              <StyledTextField
                fullWidth
                variant='outlined'
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                placeholder='1'
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
                  fontWeight: 400,
                  color: COLORS.textSecondary,
                  fontSize: '0.8rem',
                  fontFamily: FONTS.body,
                  letterSpacing: '0.05em',
                }}
              >
                Lời nhắn cho chúng mình
              </Typography>
              <StyledTextField
                fullWidth
                variant='outlined'
                multiline
                rows={3}
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
