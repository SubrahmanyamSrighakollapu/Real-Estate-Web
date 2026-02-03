import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./marketing/components/Navbar";
import Footer from "./marketing/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RealEstate - Your Property Investment Partner",
  description: "Premium real estate investments with guaranteed returns and expert guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
