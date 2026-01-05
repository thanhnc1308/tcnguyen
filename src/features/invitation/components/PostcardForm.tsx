'use client';

import type React from 'react';
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  styled,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PostcardContainer = styled(Paper)(() => ({
  position: 'relative',
  padding: '32px',
  maxWidth: '400px',
  margin: '0 auto',
  backgroundColor: '#f5f1e8',
  borderRadius: '8px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '8px',
    padding: '8px',
    background: `
      repeating-linear-gradient(
        45deg,
        #dc143c 0px,
        #dc143c 8px,
        #ffffff 8px,
        #ffffff 16px,
        #4169e1 16px,
        #4169e1 24px,
        #ffffff 24px,
        #ffffff 32px
      )
    `,
    WebkitMask:
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
  },
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#e0e0e0',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#bdbdbd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#dc143c',
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#666666',
    fontWeight: 500,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#dc143c',
  },
}));

const WishButton = styled(Button)(() => ({
  backgroundColor: '#a0522d',
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '16px',
  padding: '12px 24px',
  borderRadius: '25px',
  textTransform: 'none',
  boxShadow: '0 4px 12px rgba(160, 82, 45, 0.3)',
  '&:hover': {
    backgroundColor: '#8b4513',
    boxShadow: '0 6px 16px rgba(160, 82, 45, 0.4)',
  },
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  },
}));

interface PostcardFormProps {
  onSubmit?: (data: { name: string; message: string }) => void;
}

export default function PostcardForm({ onSubmit }: PostcardFormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, message });
    } else {
      console.log('Form submitted:', { name, message });
    }
  };

  return (
    <PostcardContainer elevation={0}>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant='body1'
            sx={{
              mb: 1,
              fontWeight: 500,
              color: '#333333',
              fontSize: '14px',
            }}
          >
            Tên
          </Typography>
          <StyledTextField
            fullWidth
            variant='outlined'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nhập tên của bạn'
            size='medium'
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant='body1'
            sx={{
              mb: 1,
              fontWeight: 500,
              color: '#333333',
              fontSize: '14px',
            }}
          >
            Lời chúc
          </Typography>
          <StyledTextField
            fullWidth
            variant='outlined'
            multiline
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Gửi lời chúc của bạn...'
            size='medium'
          />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <WishButton
            type='submit'
            variant='contained'
            startIcon={<FavoriteIcon />}
            fullWidth
          >
            Chúc Phúc
          </WishButton>
        </Box>
      </Box>
    </PostcardContainer>
  );
}
