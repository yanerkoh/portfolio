"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      ref: "/",
    },
    {
      id: 2,
      link: "projects",
      ref: "projects",
    },
  ];

  return (
    <div className="z-10 flex justify-between bg-[#F4EFE4] items-center w-full h-20 px-10 text-white fixed nav p-4">
      <div></div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, ref }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-grey-700 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href={`/${ref}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col bg-[#F4EFE4] h-screen items-center absolute top-24 left-0 w-full text-grey-700">
          {links.map(({ id, link, ref }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 hover:text-black duration-200"
            >
              <Link onClick={() => setNav(!nav)} href={`/${ref}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="absolute bottom-0 right-8 left-8 h-px bg-grey-400"></div>
    </div>
  );
};

export default Navbar;