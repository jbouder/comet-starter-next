export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="usa-section">{children}</main>
      </body>
    </html>
  );
}
