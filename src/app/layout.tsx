import {
  Geist,
  Geist_Mono,
  EB_Garamond,
  Dancing_Script,
  Kalam,
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

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const kalam = Kalam({
  variable: '--font-kalam',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${dancingScript.variable} ${kalam.variable} antialiased`}
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
