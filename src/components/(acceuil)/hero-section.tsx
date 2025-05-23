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
        <div className="flex pt-72 lg:pt-0 items-center md:justify-baseline h-full">
          <div className="flex flex-col gap-2 md:gap-6 md:mt-24 lg:mt-0">
            <h1 className=" text-5xl leading-[45px] md:text-[90px] lg:text-[74px] text-white md:max-w-[620px] md:leading-[80px] lg:leading-[65px] ">
              No more stress, just progress.
            </h1>
            <AnimationText />
            <Link
              href="/"
              className="hidden lg:block text-lg py-[14px] w-fit px-14 rounded-3xl bg-white text-green-900 hover:bg-green-900 hover:text-white transition-all duration-300 ease-in-out"
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
        className="hidden md:block absolute object-cover h-full w-full -z-10"
      >
        <source src="/desktop-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        muted
        loop={true}
        autoPlay={true}
        className="md:hidden absolute object-cover h-full w-full -z-10"
      >
        <source src="/hero-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
