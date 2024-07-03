import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="mainSection" className="usa-section">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
