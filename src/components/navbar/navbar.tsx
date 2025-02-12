"use client";

import Link from "next/link";
import NavLinks from "./nav-links";
import Links from "./types";
import { useNavlinkContext } from "@/context/navlink-context";

const links: Links[] = [
  {
    name: "Om oss",
    description: "Get a better understanding of your traffic",
    href: "#about",
  },
  {
    name: "Referenser",
    description: "Speak directly to your customers",
    href: "#references",
  },
  {
    name: "Kontakt",
    description: "Your customers’ data will be safe and secure",
    href: "#contact",
  },
];

export default function Navbar() {
  const { activeLink, setActiveLink } = useNavlinkContext();

  return (
    <header className="bg-white border-b border-gray-300 min-h-[73] sticky top-0 z-30">
      <nav
        aria-label="Global"
        className="mx-auto flex flex-col sm:flex-row max-w-7xl items-center justify-between sm:p-6 py-4 lg:px-8 gap-y-2"
      >
        <div className="flex lg:flex-1">
          <Link
            href="#home"
            className="-m-1.5 p-1.5 pb-1"
            onClick={() => setActiveLink("")}
          >
            <span className=" sm:absolute sm:top-6">LOGO</span>
          </Link>
        </div>
        <div className="flex lg:flex-1 lg:hidden">
          <div className="-m-1.5 p-1.5">
            <span className=" sr-only">PLACEHOLDER</span>
          </div>
        </div>
        <div className="flex sm:gap-x-12">
          <NavLinks
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            links={links}
          />
        </div>
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className=" sr-only">PLACEHOLDER</span>
          </div>
        </div>
        {/* <TemporaryDrawer opensFrom="right" links={links} /> */}
      </nav>
    </header>
  );
}
