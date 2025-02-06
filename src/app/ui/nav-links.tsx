"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { JSX, useState } from "react";

import { Dispatch, SetStateAction } from "react";

function NavLinks({
  activeLink,
  setActiveLink,
}: {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}): JSX.Element {
  const links = [
    {
      name: "Om oss",
      description: "Get a better understanding of your traffic",
      href: "#Om",
    },
    {
      name: "Referenser",
      description: "Speak directly to your customers",
      href: "#Referenser",
    },
    {
      name: "Kontakt",
      description: "Your customers’ data will be safe and secure",
      href: "#Kontakt",
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className={clsx(
              "text-sm leading-[24px] font-semibold text-gray-900",
              {
                "text-sm leading-[24px] font-semibold text-gray-900 border-b-2 mb-[-1.5px] border-gray-900":
                  link.name === activeLink,
              }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
