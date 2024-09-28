import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./mobile-menu";
import Wrapper from "../wrapper/wrapper";

const Navbar = () => {
  return (
    <div className="bg-white fixed w-full top-0 mb-24 z-50">
      <Wrapper>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </Link>
          <ul className="hidden sm:inline-flex gap-4">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="font-black hover:text-red-800 transition-all duration-200 ease-in-out md:text-xl"
              >
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <MobileMenu />
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;
