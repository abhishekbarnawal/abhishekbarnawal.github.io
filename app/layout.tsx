import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek | Senior Product Designer",
  description:
    "Abhishek Barnawal is a Senior Product Designer specializing in SaaS and digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#e9ebe6] text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-50`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />

            <main className="pt-[76px]">{children}</main>

            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}