"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import nav from "@/constants/nav-path";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  return (
    <header className="relative z-10 flex bg-white h-20 shadow-lg items-center justify-between px-2 lg:px-20">
      <div className="h-28">
        <Image
          src="/logo/wellexp.png"
          alt="wellexp-logo"
          width={342}
          height={148}
          className="w-full h-full"
        />
      </div>
      <nav className="flex space-x-8">
        {nav.map((item) => (
          <div key={item.href} className="relative">
            <Link
              href={item.href}
              className="transform-none font-bold text-lg text-primary"
            >
              {item.name}
            </Link>
            {item.href === pathname && (
              <div className="relative w-full h-[3px] rounded-full bg-secondary top-[4px]" />
            )}
          </div>
        ))}
      </nav>
      <Button>Book a Demo</Button>
    </header>
  );
};

export default Header;
