import React from "react";
import Wrapper from "../wrapper/wrapper";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full border-b-[1px] border-white">
        <Wrapper className="flex items-center justify-between py-4">
          <ul className="flex gap-2 md:gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.url}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </Wrapper>
      </nav>
    </>
  );
};

export default Navbar;
