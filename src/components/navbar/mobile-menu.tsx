import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <div className="sm:hidden">
      <Drawer direction="right">
        <DrawerTrigger>
          <RiMenu3Line size={30} />
        </DrawerTrigger>
        <DrawerContent className="rounded-none h-full">
          <DrawerHeader>
            <DrawerClose>
              <IoCloseSharp size={35} />
            </DrawerClose>
            <div>
              <ul className="flex flex-col gap-5 text-xl">
                {navLinks.map((link, i) => (
                  <li
                    key={i}
                    className="font-black hover:text-red-900 transition-all duration-200 ease-in-out"
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
