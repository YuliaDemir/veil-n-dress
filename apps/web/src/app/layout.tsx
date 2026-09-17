import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  description:
    'Аренда свадебных платьев с доставкой на дом. Выбирайте платье онлайн, бронируйте удобные даты и готовьтесь к свадьбе без лишних хлопот.',
  title: 'Veil-n-Dress',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
