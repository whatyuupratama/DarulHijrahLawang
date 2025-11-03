import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pendaftaran Santri Baru | Pondok Tahfizh Darul Hikmah Lawang',
  description:
    'Informasi resmi pendaftaran santri baru Pondok Tahfizh Darul Hikmah Lawang. Program unggulan, ekstrakurikuler, timeline, dan kontak Ust. Mada.',
  metadataBase: new URL('https://dhlawang.or.id'),
  openGraph: {
    title: 'Pendaftaran Santri Baru DH Lawang',
    description:
      'Lengkapi pendaftaran santri baru dan konfirmasi langsung ke Ust. Mada. Program tahfizh intensif, halaqoh tarbawi, dan life skill.',
    url: 'https://dhlawang.or.id',
    images: ['/logo.png'],
    siteName: 'Pondok Tahfizh Darul Hikmah Lawang',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/logo.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [{ url: '/logo.png' }],
    apple: [{ url: '/logo.png', rel: 'apple-touch-icon', sizes: '180x180' }],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground]`}
      >
        {children}
      </body>
    </html>
  );
}
