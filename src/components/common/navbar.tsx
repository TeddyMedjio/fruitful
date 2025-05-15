import FruitfulLogo from "@/components/icons/fruitful_logo";
import Link from "next/link";
import React from "react";
import { Navigation } from "./navigation";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" absolute inset-0 mt-7 h-[53px] mx-auto max-w-[1404px] z-50">
      <nav className="px-14 xl:px-0 flex items-center justify-between">
        <Link href="/">
          <FruitfulLogo />
        </Link>
        <div className=" backdrop-blur-xl bg-[rgb(255,255,255,0.2)] py-2 px-5 rounded-xl">
          <Navigation />
        </div>
        <div className="inline-flex gap-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-1 backdrop-blur-xl bg-[rgb(255,255,255,0.2)] [14px] px-5 rounded-xl hover:bg-green-900 hover:text-green-100 transition-all duration-300 ease-in-out"
          >
            Login
            <ArrowRight
              size={18}
              className="group-hover:text-green-100 transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link
            href="/"
            className="py-[14px] px-5 rounded-3xl bg-green-900 text-green-100 hover:bg-green-100 hover:text-green-900 transition-all duration-300 ease-in-out"
          >
            Get started
          </Link>
        </div>
      </nav>
    </div>
  );
}
