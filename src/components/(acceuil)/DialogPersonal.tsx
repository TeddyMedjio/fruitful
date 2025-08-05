"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { ButtonInitial } from "../common/button-initial";
import Link from "next/link";

type ImageData = {
  id: number;
  src: string;
  title: string;
  video: string;
  description: string;
};

type Props = {
  images: ImageData[];
  triggerImage: ImageData;
  triggerIndex: number;
};

export default function ImageDialog({
  images,
  triggerImage,
  triggerIndex,
}: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(triggerIndex);

  const openModal = () => {
    setCurrentIndex(triggerIndex);
    setOpen(true);
  };

  const image = images[currentIndex];

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const next = () => {
    setCurrentIndex(nextIndex);
  };

  const prev = () => {
    setCurrentIndex(prevIndex);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="h-[180px] w-[80px] md:h-[220px] md:w-[165px] bg-orange-100 rounded-xl relative overflow-hidden cursor-pointer"
          onClick={openModal}
        >
          <Image
            src={triggerImage.src}
            alt={triggerImage.title}
            fill={true}
            className="absolute w-full h-full object-cover z-10 hidden lg:block lg:hover:hidden"
          />
          <video
            loop
            muted
            playsInline={true}
            autoPlay
            className="absolute w-full h-full object-cover z-10 lg:opacity-0 lg:hover:opacity-100"
          >
            <source src={image.video} type="video/mp4" />
          </video>
        </div>
      </DialogTrigger>

      <DialogContent
        className={cn(
          "sm:max-w-4xl lg:h-[50%] p-3 rounded-t-3xl rounded-b-3xl"
        )}
      >
        <DialogHeader>
          <div className="flex items-center gap-10 h-full w-full">
            <div className=" flex-1/2 h-full w-full bg-orange-100 rounded-2xl relative overflow-hidden hidden md:block">
              {/* <Image
                src={image.src}
                alt={triggerImage.title}
                fill={true}
                className="absolute w-full h-full object-cover z-10 hidden lg:block lg:hover:hidden"
              /> */}
              <video
                loop
                playsInline={true}
                autoPlay
                className="absolute w-full h-full object-cover"
              >
                <source src={image.video} type="video/mp4" />
              </video>
            </div>
            <div className="md:flex-1/2 space-y-5 mx-5 md:mr-5">
              <div className="text-start">
                <DialogTitle className={cn("text-3xl md:text-5xl font-medium")}>
                  {image.title}
                </DialogTitle>
                <p>CFP® Professional</p>
              </div>
              <p className="text-sm md:text-base text-black/60 text-start">
                {image.description}
              </p>
              <div className="flex flex-wrap gap-1 w-full h-auto text-start">
                <p className="bg-blue-100/50 p-2 rounded-full text-sm md:text-base text-black">
                  💬​ Conversational
                </p>{" "}
                <p className="bg-blue-100/50 p-2 rounded-full text-sm md:text-base text-black">
                  🙌 Dedicated
                </p>
                <p className="bg-blue-100/50 p-2 rounded-full text-sm md:text-base text-black">
                  🧠 Open-minded
                </p>{" "}
              </div>
              <ButtonInitial variant="default" className={cn("mt-5")} asChild>
                <Link href="/">Chooce your Guide</Link>
              </ButtonInitial>
            </div>
          </div>
        </DialogHeader>

        <div className="flex items-center justify-center my-4 w-full md:hidden">
          <div className="flex justify-between w-[90%]">
            <button onClick={prev} className=" text-green-900 cursor-pointer">
              ← {images[prevIndex].title}
            </button>
            <button onClick={next} className="text-green-900 cursor-pointer">
              {images[nextIndex].title} →
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
