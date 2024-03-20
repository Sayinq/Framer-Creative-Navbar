import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Navbar",
  description: "Framer-motion reusable creative navbar based on Deduxer and Eurecah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css" />
        <script src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
