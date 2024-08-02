import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { Metadata } from 'next';
import QueryClientProvider from '@providers/query-client-provider';
import RecoilContextProvider from '@providers/recoil-context-provider';
import './styles.scss';

export const metadata: Metadata = {
  title: 'Starter App - Next',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <QueryClientProvider>
            <Header />
            <main id="mainSection" className="usa-section">
              {children}
            </main>
            <Footer />
          </QueryClientProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
