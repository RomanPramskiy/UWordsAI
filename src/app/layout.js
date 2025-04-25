
import "./globals.css";

export const metadata = {
  title: "UWORDSAI",
  description: "LEARN ENGLISH WITH US",
  keywords: ["learn English", "English AI", "language learning", "UWORDSAI", "education"],
  authors: [
    { name: "UWORDSAI Team" },
  ],
  creator: "UWORDSAI",
  publisher: "UWORDSAI",
  robots: "index, follow",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "ru": "/ru",
    },
  },
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
