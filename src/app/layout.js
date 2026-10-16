import './globals.css';
import { body, display } from './fonts';
import Providers from './components/providers';
import Footer from './components/footer';
import SiteHeader from './components/site-header';

export const metadata = {
  title: 'Jumana Fathima',
  description:
    'Jumana Fathima — data scientist & bookworm in Seattle. Writing, experience, and things I’m curious about.',
  openGraph: {
    title: 'Jumana Fathima',
    description: 'Data scientist & bookworm in Seattle.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="mx-auto flex min-h-screen max-w-content flex-col px-5 py-10 sm:px-6 sm:py-16">
            <SiteHeader />

            <main className="flex-1 animate-fade-up">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
