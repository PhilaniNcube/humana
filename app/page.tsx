import DesktopLinks from "@/components/desktop-links";
import Hero from "@/components/hero";
import Initiative from "@/components/initiative";
import Policymakers from "@/components/policymakers";
import YouthVoices from "@/components/youth-voices";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <Initiative />
      <YouthVoices />
      <Policymakers />
    </div>
  );
}
