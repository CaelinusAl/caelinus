import "./globals.css";

export const metadata = {
  title: "Caelinus",
  description: "Caelinus Universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}