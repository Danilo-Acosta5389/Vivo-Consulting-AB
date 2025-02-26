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
              "text-xl leading-[24px] text-gray-900 sm:px-6 px-4 pb-1",
              {
                "border-b-2 font-medium border-gray-900 pb-0":
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
