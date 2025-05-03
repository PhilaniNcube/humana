import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import DesktopNavigation from "@/components/desktop-navigation";
import YouthFooter from "@/components/footer";





export const metadata: Metadata = {
  title: "Humana | Africa Skills Revolution",
  description: "Africa Skills Revolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <DesktopNavigation />
        {children}
        <YouthFooter />
      </body>
    </html>
  );
}
