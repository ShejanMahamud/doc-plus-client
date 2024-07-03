import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {NextUIProvider} from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doc Plus",
  description: "Doc Plus By CodeLabs Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fbfbfb]`}>
        <NextUIProvider>
        <Navbar/>
        {children}
        <Footer/>
        </NextUIProvider>
        </body>
    </html>
  );
}
