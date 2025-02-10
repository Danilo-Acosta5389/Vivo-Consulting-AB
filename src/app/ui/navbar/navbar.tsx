"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavLinks from "./nav-links";
import Links from "./types";

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

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [linkName, setLinkName] = useState("");

  return (
    <header className="bg-white border-b border-gray-300 max-h-[73] min-h-[73] sticky top-0 z-30">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center sm:justify-between justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="#home"
            className="-m-1.5 p-1.5 pb-1"
            onClick={() => setLinkName("")}
          >
            <span className=" absolute top-6">LOGO</span>
          </Link>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          <NavLinks
            activeLink={linkName}
            setActiveLink={setLinkName}
            links={links}
          />
        </div>
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className=" sr-only">PLACEHOLDER</span>
          </div>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="#home"
              className="-m-1.5 p-1.5"
              onClick={() => {
                setLinkName("");
                setMobileMenuOpen(false);
              }}
            >
              <span className="">LOGO</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
