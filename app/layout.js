import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Nabd Alhayat",
  description: "Home Medical Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
