import React from "react";

import Image from "next/image";
import { Facebook, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const nav = [
    {
      title: "Company",
      links: [
        {
          name: "About",
          href: "/about",
        },
        {
          name: "Contact",
          href: "/contact",
        },
        {
          name: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          name: "Terms of Service",
          href: "/terms-of-service",
        },
        {
          name: "FAQ",
          href: "/faq",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Our Features",
          href: "/features",
        },
        {
          name: "Our solution",
          href: "/solution",
        },
        {
          name: "Pricing & Package",
          href: "/pricing",
        },
        {
          name: "Help Centre",
          href: "/help",
        },
      ],
    },
    {
      title: "PRESS & MEDIA",
      links: [
        {
          name: "Blog",
          href: "/blog",
        },
        {
          name: "Case Studies",
          href: "/case-studies",
        },
        {
          name: "Podcast",
          href: "/podcast",
        },
        {
          name: "Event & Demo Day",
          href: "/events",
        },
      ],
    },
  ];
  return (
    <div className="flex w-full h-[400px] px-36 pt-10 space-x-28 text-primary mt-auto">
      <div className="space-y-6 font-bold text-sm">
        <Image
          src="/logo/wellexp.png"
          alt="wellexp-logo"
          width={171}
          height={74}
          className="my-[-30px]"
        />
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail />
            <p>pragasit@wellexp.co</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone />
            <p>092-298-2936</p>
          </div>
        </div>
        <div>
          <p>9/237 Ratchadapisek 58,</p>
          <p>Ratchadapisek Rd,</p>
          <p>Chattuchak Bangkok 10900</p>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 w-full font-medium">
          {nav.map((item) => (
            <div key={item.title} className="space-y-6">
              <p className="text-[color:hsl(var(--primary))] font-bold text-lg">
                {item.title}
              </p>
              <div className="flex flex-col space-y-2">
                {item.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
