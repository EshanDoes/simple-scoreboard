import "./globals.css";

export const metadata = {
  title: "Simple Scoreboard",
  description: "Need a quick scoreboard? Make one here!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased overflow-clip`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
