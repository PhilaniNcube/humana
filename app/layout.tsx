import type { Metadata } from "next";
import "./globals.css";
import "../styles/smooth-scroll.css";
import { roboto } from "@/lib/fonts";
import DesktopNavigation from "@/components/desktop-navigation";
import YouthFooter from "@/components/footer";
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper";

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
        className={`${roboto.className} antialiased overflow-x-hidden`}
      >
        {/* Navigation stays outside the smooth scroller */}
        <div className="fixed top-0 left-0 w-full z-50">
          <DesktopNavigation />
        </div>

        {/* Main content area with smooth scrolling */}

          <main className="pt-24 flex-grow">
            {children}
          </main>
          <YouthFooter />
     
      </body>
    </html>
  );
}
