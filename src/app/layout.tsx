import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Inter,
  Great_Vibes,
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

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} ${greatVibes.variable} antialiased`}
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
