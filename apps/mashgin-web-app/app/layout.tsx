import './global.scss';
import { League_Spartan } from 'next/font/google';
import Header from '../libs/components/header';

const sans = League_Spartan({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Welcome to Mashgin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
