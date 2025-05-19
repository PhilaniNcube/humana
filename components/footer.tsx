import Link from "next/link";
import {
  Mail,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function YouthFooter() {
  const logos = [
    {
      image: "/images/ilo.png",
      alt: "ILO Logo",
      href: "https://www.ilo.org/",
    },
    {
      image: "/images/evbb.png",
      alt: "EVBB Logo",
      href: "https://learning.evbb.eu/",
    },
    // {
    //   image: "/images/giz.png",
    //   alt: "GIZ Logo",
    //   href: "https://www.giz.de/en/worldwide/68537.html",
    // },
    {
      image: "/images/trust.png",
      alt: "Trust Logo",
      href: "https://trustafrica.org/",
    },
    {
      image: "/images/unesco.png",
      alt: "UNESCO Logo",
      href: "https://unevoc.unesco.org/home/",
    },
    {
      image: "/images/tupa.png",
      alt: "TUPA Logo",
      href: "https://atupa-sec.org/",
    },
  ];

  // get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-[40px]">
        {/* Acknowledgments */}
        <div className="text-center mb-10">
          <p className="mx-auto text-gray-500">
            This project would not have been possible without the dedication and
            collaboration of many. AUDA-NEPAD and Humana People to People extend
            heartfelt thanks to our partners, contributors, and the young people
            whose voices and innovations have shaped this campaign.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="py-8 border-t border-b border-gray-700">
          <div className="flex flex-wrap items-center gap-8 justify-around">
            {/* Placeholder for logos - replace with actual logos */}
            {logos.map((logo, index) => (
              <Link
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="object-cover min-w-52 aspect-auto"
                />
              </Link>
            ))}
            {/* ILO Logo */}
          </div>
        </div>

        {/* Special Recognition */}
        <div className="py-8 text-center">
          <p className="text-gray-500 mb-4">
            Special recognition goes to the participants of the Make Yourself
            Heard survey and the Africa Skills Revolution Competition. Your
            stories are a testament to the transformative power of TVET — and
            your leadership continues to inspire.
          </p>
          <p className="text-gray-500">
            We also thank the educators, policymakers, and development partners
            working tirelessly to make inclusive, future-ready skills systems a
            reality across Africa.
          </p>
        </div>

        {/* Contact Information */}
        <div className="py-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-orange mb-4">
                Want to learn more or collaborate?
              </h3>
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                <span className="hidden md:block">Email us at </span>
                <a
                  href="mailto:africaskillsrevolution@nepad.org"
                  className="text-brand-blue hover:underline"
                >
                  africaskillsrevolution@nepad.org
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Globe className="h-5 w-5 text-brand-blue" />
                <span className="hidden md:block">Visit:</span>
                <a
                  href="https://www.nepad.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  www.nepad.org
                </a>
                <span>|</span>
                <a
                  href="https://www.humana.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  www.humana.org
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-orange mb-4">
                Follow the campaign:
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-blue"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-blue"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-blue"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-blue"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                <p>
                  @auda_nepad @NEPAD_Agency <br />
                  @HumanaHPP @humana_people_to_people
                </p>
                <p className="mt-2 text-brand-orange font-medium">
                  #AfricaSkillsRevolution #TheAfricaWeWant
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Co-financing */}
        <div className="pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>
              All visuals and stories featured on this site are shared with the
              permission of participants and campaign partners.
            </p>
            <div>
              <p className="font-medium">Co-financed by:</p>
              <div className="flex gap-x-3 items-center">
                <img
                  src="/images/hpp_et.png"
                  alt="HPP E&T"
                  className="h-20 w-auto"
                />
                <img
                  src="/images/sifa.jpg"
                  alt="SIFA"
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
          <p className="mt-6 text-center">
            © {currentYear} Africa Skills Revolution Campaign. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
