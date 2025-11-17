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
    default: 'Pendaftaran Santri Baru | Pondok Tahfizh Darul Hikmah Lawang',
    template: '%s | Pondok Tahfizh Darul Hikmah Lawang',
  },
  description:
    'Informasi resmi pendaftaran santri baru Pondok Tahfizh Darul Hikmah Lawang. Program unggulan, ekstrakurikuler, timeline, dan kontak Ust. Mada.',
  keywords: [
    'pendaftaran santri baru',
    'pondok tahfizh lawang',
    'mahad tahfidz darul hijrah',
    'pesantren tahfizh malang',
    'santri tahfidz nusantara',
    'pondok lawang',
    'tahfidz lawang',
    'pesantren lawang',
    'pondok tahfidz malang',
    'pondok tahfizhul quran lawang',
    'pendaftaran pondok lawang',
    'ppdb pondok lawang',
    'pondok tahfidz di malang',
    'mahad tahfidz lawang',
    'darul hijrah lawang',
    'pondok di lawang',
    'pesantren tahfidz lawang',
    'mondok di lawang',
  ],
  applicationName: 'Darul Hijrah Lawang PPDB',
  authors: [{ name: 'Pondok Tahfizh Darul Hikmah Lawang' }],
  creator: 'Pondok Tahfizh Darul Hikmah Lawang',
  publisher: 'Pondok Tahfizh Darul Hikmah Lawang',
  category: 'education',
  alternates: {
    canonical: '/',
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
        alt: 'Logo Pondok Tahfizh Darul Hikmah Lawang',
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
      'Informasi resmi pendaftaran santri baru Pondok Tahfizh Darul Hikmah Lawang.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/logo.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [{ url: '/logo.png' }],
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
