import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furrow",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Cursor />

        {children}
        <Navbar />
      </body>
    </html>
  );
}
