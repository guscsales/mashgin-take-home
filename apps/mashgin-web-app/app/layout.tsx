import './global.scss';

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
      <body>
        <header>
          <div className="text-4xl">Mashgin Restaurant</div>
        </header>
        {children}
      </body>
    </html>
  );
}
