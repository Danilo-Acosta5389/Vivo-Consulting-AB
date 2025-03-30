"use client";

import Link from "next/link";
import clsx from "clsx";
import { JSX } from "react";
import Links from "./types";

import { Dispatch, SetStateAction } from "react";

function NavLinks({
  activeLink,
  setActiveLink,
  links,
}: {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
  links: Links[];
}): JSX.Element {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className={clsx(
              "text-lg sm:text-xl text-gray-900 sm:px-6 px-4 pb-0 whitespace-nowrap",
              {
                "border-b-2 font-medium border-gray-900 -mb-1":
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
