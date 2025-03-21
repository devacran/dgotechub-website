import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    {
      path: "/",
      text: "Inicio",
    },
    {
      path: "/community",
      text: "Comunidad",
    },
    {
      path: "/events",
      text: "Eventos",
    },
  ];

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-10">
      <div className="md:max-w-6xl mx-auto px-4 md:px-0 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={70}
            height={70}
            className="mr-2"
          />
          </Link>
        </div>
        <nav className="flex space-x-6 md:space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.path} path={item.path} text={item.text} />
          ))}
        </nav>
      </div>
    </header>
  );
}
