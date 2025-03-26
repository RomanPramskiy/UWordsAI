import "./globals.css";

export const metadata = {
  title: "UWORDSAI",
  description: "LEARN ENGLISH WITH US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
