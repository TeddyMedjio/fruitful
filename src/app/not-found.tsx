import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="mx-auto flex h-[90vh] max-w-[25rem] w-full items-center justify-center flex-col text-center">
      <Image src="/bambous.png" height={208} width={208} alt="image branche" />
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[75px]">404</h1>
        <p className="text-center text-lg mb-4">
          Page not found! <br />
          Please contact support@fruitful.demo
        </p>
        <Link
          href="/"
          className="py-[14px] text-center w-62 rounded-2xl bg-green-900 text-green-100 hover:bg-green-100 hover:text-green-900 transition-all duration-300 ease-in-out"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
