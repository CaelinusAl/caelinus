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
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#05070f",
        }}
      >
        {children}
      </body>
    </html>
  );
}