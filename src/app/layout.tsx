import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteUrl, seoDefaults } from '@/lib/seo';
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
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pendaftaran Santri Baru | Pondok Tahfizh Darul Hijrah Lawang',
    template: '%s | Pondok Tahfizh Darul Hijrah Lawang',
  },
  description:
    'Informasi resmi pendaftaran santri baru Pondok Tahfizh Darul Hijrah Lawang. Program unggulan, ekstrakurikuler, timeline, dan kontak Ust. Mada.',
  keywords: [
    'pendaftaran santri baru',
    'pondok tahfizh darul hijrah lawang',
    'pondok tahfizh darul hijrah',
    'mahad tahfidz darul hijrah lawang',
    'mahad tahfidz darul hijrah',
    'pesantren tahfizh darul hijrah',
    'darul hijrah lawang',
    'pondok tahfizh lawang',
    'pondok tahfizh di malang',
    'pondok tahfizh jawa timur',
    'pesantren tahfizh malang',
    'pesantren lawang',
    'pendaftaran pondok lawang',
    'ppdb pondok lawang',
    'pondok tahfizhul quran lawang',
    'mondok di lawang',
    'tahfidz lawang',
    'santri tahfidz nusantara',
  ],
  applicationName: 'Darul Hijrah Lawang PPDB',
  authors: [{ name: 'Pondok Tahfizh Darul Hijrah Lawang' }],
  creator: 'Pondok Tahfizh Darul Hijrah Lawang',
  publisher: 'Pondok Tahfizh Darul Hijrah Lawang',
  category: 'education',
  alternates: {
    canonical: 'https://darulhijrahlawang.com',
    languages: {
      'id-ID': '/',
    },
  },
  openGraph: {
    title: 'Pendaftaran Santri Baru DH Lawang',
    description:
      'Lengkapi pendaftaran santri baru dan konfirmasi langsung ke Ust. Mada. Program tahfizh intensif, halaqoh tarbawi, dan life skill.',
    url: siteUrl,
    images: [
      {
        url: '/logo.png',
        alt: 'Logo Pondok Tahfizh Darul Hijrah Lawang',
        width: 512,
        height: 512,
      },
    ],
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pendaftaran Santri Baru DH Lawang',
    description:
      'Informasi resmi pendaftaran santri baru Pondok Tahfizh Darul Hijrah Lawang.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.ico',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/logo.png', rel: 'apple-touch-icon', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: seoDefaults.siteName,
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lawang',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    sameAs: [siteUrl, 'https://wa.me/6287839673299'],
  };

  return (
    <html lang='id'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
