import FruitfulLogo from "@/components/icons/fruitful_logo";
import Link from "next/link";
import { Navigation } from "./navigation";
import { ArrowRight, MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" absolute inset-0 mt-7 h-[53px] mx-auto max-w-[1404px] z-50">
      <nav className="mx-5 lg:mx-10 2xl:mx-0 flex items-center justify-between">
        <Link href="/">
          <FruitfulLogo />
        </Link>
        <div className=" backdrop-blur-xl bg-[rgb(255,255,255,0.2)] py-2 px-5 rounded-xl hidden lg:block ">
          <Navigation />
        </div>
        <div className="inline-flex items-center gap-3 md:gap-7">
          <Link
            href="/"
            className="hidden group md:inline-flex items-center gap-1 backdrop-blur-xl bg-[rgb(255,255,255,0.2)] p-[14px] px-5 rounded-2xl hover:bg-green-900 hover:text-green-100 transition-all duration-300 ease-in-out"
          >
            Log in
            <ArrowRight
              size={18}
              className="group-hover:text-green-100 transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link
            href="/"
            className="py-[10px] md:py-[14px] px-5 rounded-full md:rounded-2xl bg-green-900 text-green-100 hover:bg-green-100 hover:text-green-900 transition-all duration-300 ease-in-out"
          >
            Get started
          </Link>
          <Link
            href="/"
            className="md:hidden bg-[#9a9a9a66] p-[10px] rounded-full "
          >
            <MenuIcon size={20} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
