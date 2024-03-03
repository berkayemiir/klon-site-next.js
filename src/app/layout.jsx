import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import socialResponsibility from "@/components/socialResponsibility";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Prof. Dr. Nevzat TARHAN | Haberler, Videolar, Köşe Yazıları, Özgeçmiş",
  description:
    "Rektör, psikiyatrist, yazar ve aktivist Prof. Dr. Nevzat Tarhan’a dair merak edilen her şeyi kişisel resmi web sayfasında bulabilirsiniz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="py-5">{children}</main>
        <socialResponsibility/>
        <Footer />
      </body>
    </html>
  );
}
