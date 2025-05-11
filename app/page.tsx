import DesktopLinks from "@/components/desktop-links";
import Hero from "@/components/hero";
import Initiative from "@/components/initiative";
import Policymakers from "@/components/policymakers";
import YouthResources from "@/components/resources";
import YouthVoices from "@/components/youth-voices";
import Road from "@/components/path";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Hero />
      <Initiative />
      <YouthVoices />

      <Policymakers />
      <YouthResources />
    </main>
  );
}
