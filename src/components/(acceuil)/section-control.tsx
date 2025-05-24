import React from "react";
import Container from "../common/container";
import { ArrowRight, ListTodo, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SectionControl() {
  return (
    <Container>
      <div className="grid place-items-center w-full">
        {/* animation text */}
        <h2 className="text-[40px] leading-[44px] max-w-[700px] text-center my-40">
          Take control of your finances with 1-on-1 advice and a tailor-made
          money system that gets you organized, optimized, and on track in 30
          days.
        </h2>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full flex-wrap gap-8">
          <div className="bg-gray-100 flex flex-col items-baseline justify-between py-7 px-5 md:p-10 rounded-3xl min-h-[505px] h-[557px] flex-1 space-y-5">
            <span className="inline-flex gap-2 py-3 px-6 bg-white rounded-full text-[12px] font-semibold">
              <MessagesSquare size={20} /> Advice
            </span>
            <p className="text-[28px] font-bold leading-[30px]">
              Smart, supportive Guides dedicated to you, your finances, and your
              goals.
            </p>
            <div className="relative h-[13em] md:h-[16.25em] w-full md:w-[26em] mx-auto">
              <Image
                src="https://cdn.prod.website-files.com/659f15a242e58eb40c8cf14b/681915f369a8014b1d400036_info-card-guides.avif"
                fill={true}
                alt=""
                className="absolute object-contain"
              />
            </div>
            <Link
              href="/"
              className="inline-flex items-center py-[10px] md:py-[14px] px-5 rounded-full md:rounded-3xl bg-white text-gray-700 hover:bg-green-100 hover:text-green-900 transition-all duration-300 ease-in-out"
            >
              Meet the Guides
              <ArrowRight
                size={15}
                className="group-hover:text-green-100 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
          <div className="bg-gray-100 flex flex-col items-baseline justify-between py-7 px-5 md:p-10 rounded-3xl min-h-[505px] h-[557px] flex-1 space-y-5">
            <span className="inline-flex gap-2 py-3 px-6 bg-white rounded-full text-[12px] font-semibold">
              <ListTodo size={20} /> Action
            </span>
            <p className="text-[28px] font-bold leading-[30px]">
              A built-for-you money system that puts your finances on autopilot.
            </p>
            <div className="relative size-[13em] md:size-[224px] mx-auto">
              <Image
                src="https://cdn.prod.website-files.com/659f15a242e58eb40c8cf14b/681915f33f71a3490a196cf8_info-card-flow.svg"
                fill={true}
                alt=""
                className="absolute object-contain"
              />
            </div>
            <Link
              href="/"
              className="inline-flex items-center py-[10px] md:py-[14px] px-10 rounded-full md:rounded-3xl bg-white text-gray-700 hover:bg-green-100 hover:text-green-900 transition-all duration-300 ease-in-out"
            >
              Get started
              <ArrowRight
                size={15}
                className="group-hover:text-green-100 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
