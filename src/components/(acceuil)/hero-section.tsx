import Link from "next/link";
import React from "react";
import AnimationText from "../common/animation-text";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="relative mx-5 lg:mx-10 2xl:mx-0 w-full h-full max-w-[1404px]">
        <div className="z-10 w-full lg:w-fit absolute bottom-5 lg:bottom-12 lg:right-0 bg-white px-14 py-6 text-center rounded-2xl flex flex-col items-center justify-center gap-y-3">
          <p className="text-xl font-semibold">Limited Time Offer</p>
          <div>
            <p className="text-sm">Save $50 on your first month of Fruitful!</p>
            <p className="text-sm">Discount auto-applied at checkout.</p>
          </div>
          <Link
            href="/"
            className="text-base py-[10px] w-fit px-10 rounded-2xl bg-green-900 text-green-100 hover:bg-green-100 hover:text-green-900 transition-all duration-300 ease-in-out"
          >
            Find ny Guide
          </Link>
        </div>
        <div className="flex items-center justify-start h-full">
          <div className="flex flex-col gap-7">
            <h1 className="text-[87px] text-white max-w-[500px] leading-[75px] ">
              Finances figured out for you
            </h1>
            <AnimationText />
            <Link
              href="/"
              className="text-lg py-[14px] w-fit px-18 rounded-3xl bg-white text-green-900 hover:bg-green-900 hover:text-white transition-all duration-300 ease-in-out"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      {/* barre dinfors */}
      <div className="hidden lg:block bg-green-100 w-full py-2 text-center absolute bottom-0 ">
        <p className="text-green-900 font-semibold">
          Love Fruitful within 30 days
        </p>
        <p className="text-green-900">...or get a full refund. No fuss.</p>
      </div>

      {/* video background */}
      <video
        muted
        loop={true}
        autoPlay={true}
        className="absolute top-0 object-cover h-full w-full -z-10"
      >
        <source src="/hero-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
