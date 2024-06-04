import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../wrapper/wrapper";

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Menu = () => {
  return (
    <Wrapper>
      <nav className="flex items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
        <ul className="hidden sm:inline-flex text-white items-center gap-3 xl:gap-10">
          {links.map((link, i) => (
            <li
              key={i}
              className="hover:text-third transition-all duration-200 ease-in-out"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Menu;
