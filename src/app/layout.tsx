import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
  DM_Sans,
  Pinyon_Script,
} from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { TRPCProvider } from '@/providers/TRPCProvider';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const pinyonScript = Pinyon_Script({
  variable: '--font-pinyon-script',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${cormorantGaramond.variable} ${pinyonScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppRouterCacheProvider>
          <TRPCProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </TRPCProvider>
        </AppRouterCacheProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
