import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Contact Librovuelos | 24*7 Support",
  description: "Need Help? Reach out to experts of Librovuelos, and seek assistance 24*7 regarding all travel-related queries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
