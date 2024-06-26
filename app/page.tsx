import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const navigation = [
  { name: "Productos", href: "/products" },
  { name: "Contacto", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className=" duration-500 text-zinc-500 hover:text-zinc-300 text-2xl"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text tracking-wide">
        Futūrus
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-2xl text-zinc-500">
          Un paso hacia el futuro.
        </h2>
        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );

}
