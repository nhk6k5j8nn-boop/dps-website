import "./globals.css";

export const metadata = {
  title: "Davidson Preparatory School",
  description: "Apex Rams • Reach Your Apex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
