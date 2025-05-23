import type { Metadata } from "next";
import "./globals.css";
import "../styles/smooth-scroll.css";
import { roboto } from "@/lib/fonts";
import DesktopNavigation from "@/components/desktop-navigation";
import YouthFooter from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Africa Skills Revolution",
  description:
    "Putting youth at the centre of the Technical and Vocational Education and Training revolution across the continent",
  keywords: [
    "Africa Skills Revolution",
    "Technical and Vocational Education",
    "Youth Empowerment",
    "Education",
    "Skills Development",
    "Youth",
    "Africa",
    "AUDA-NEPAD",
    "Youth Initiative",
    "Youth Voices",
    "Humana People to People",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased overflow-x-hidden`}>
        {/* Navigation stays outside the smooth scroller */}
        <div className="fixed top-0 left-0 w-full z-50">
          <DesktopNavigation />
        </div>

        {/* Main content area with smooth scrolling */}

        <main className="pt-24 flex-grow">{children}</main>
        <YouthFooter />
        <GoogleAnalytics gaId="G-0BED8T621K" />
      </body>
    </html>
  );
}
