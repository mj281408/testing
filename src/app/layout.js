import { Inter } from "next/font/google";
import "./globals.css";
import "./css/fonts.css";
import Header from "./common/header";
import Footer from "./common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font ${inter.className}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
