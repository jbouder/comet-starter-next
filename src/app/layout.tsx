import { Footer } from "@components/footer/footer";
import { Header } from "@components/header/header";
import { Metadata } from "next";
import RecoilContextProvider from "src/providers/recoil-context-provider";

export const metadata: Metadata = {
  title: "Starter App - Next",
  generator: "Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <Header />
          <main id="mainSection" className="usa-section">
            {children}
          </main>
          <Footer />
        </RecoilContextProvider>
      </body>
    </html>
  );
}
