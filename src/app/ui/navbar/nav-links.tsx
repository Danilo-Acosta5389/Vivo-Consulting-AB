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
