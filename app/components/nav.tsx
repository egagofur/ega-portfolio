"use client";

import { navbars } from "@/src/data/navbars";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Navigation: React.FC = () => {
  const [nav, setNav] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div
          onClick={handleClick}
          className="md:hidden z-100 relative top-6 left-5 cursor-pointer w-8 "
        >
          {!nav ? (
            <Menu className="w-8 h-8 text-zinc-300 hover:text-zinc-200 hover:bg-zinc-700 rounded-md" />
          ) : (
            <X className="relative w-6 h-6 text-zinc-300 hover:text-zinc-100" />
          )}
        </div>
        <div className="container flex justify-center items-center  p-6 mx-auto">
          <nav className="md:flex justify-between gap-8 hidden">
            {navbars.map((nav: any, index: number) => (
              <Link
                key={index}
                href={nav.link}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <ul
            className={
              "fixed z-40 w-full h-screen  bg-zinc-900 flex flex-col pt-16  pl-6 items-start pb-20 ease-in-out "
            }
          >
            {navbars.map((nav: any, index: number) => (
              <li className="py-4 border-zinc-900" key={index}>
                <Link
                  key={index}
                  href={nav.link}
                  onClick={handleClick}
                  className="duration-200 text-xl text-zinc-100 hover:text-zinc-100"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </header>
  );
};
