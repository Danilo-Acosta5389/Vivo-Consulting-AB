"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import NavLinks from "./nav-links";
import Links from "./types";
import { useNavlinkContext } from "@/context/navlink-context";
import Image from "next/image";
import { useState } from "react";

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
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100 && window.innerWidth < 768) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-40%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white border-b border-gray-300 sticky top-0 z-30 flex flex-col justify-center items-center "
    >
      <nav
        aria-label="Global"
        className="mx-auto flex flex-col md:flex-row max-w-7xl w-full items-center justify-between md:p-6 lg:px-8 gap-y-2 py-4"
      >
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -10 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex lg:flex-1"
        >
          <Link
            className="-m-1.5 p-1.5 pb-1"
            href="#home"
            onClick={() => setActiveLink("")}
          >
            <Image
              src={"/vivo-logo.svg"}
              width={150}
              height={50}
              alt="Company logo"
              className=" md:absolute md:top-5"
            />
          </Link>
        </motion.div>
        <div className="flex lg:flex-1 md:hidden">
          <div className="-m-1.5 p-1.5">
            <span className=" sr-only">PLACEHOLDER</span>
          </div>
        </div>
        <div className="flex lg:gap-x-12">
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
      </nav>
    </motion.header>
  );
}
