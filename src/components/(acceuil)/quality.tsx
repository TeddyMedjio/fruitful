import React from "react";

export default function Quality() {
  return (
    <div className="grid place-items-center h-[800px]">
      <h2 className="text-4xl font-semibold text-center">
        You need a money system,
        <br />
        <span className="text-gray-500">not a “financial plan.”</span>
      </h2>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="flex-1/2 h-full pb-60 relative">
          <div className="sticky top-0 w-full h-[200px] bg-gradient-to-t to-white via-white/80 from-transparent"></div>
          <div className="space-y-44 pl-20">
            <div className="max-w-[250px]">
              <p className="font-semibold text-[29px]">Just for you</p>
              <p className="text-lg">
                Built by your Guide, tailored to your finances, goals, and
                timelines
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="font-semibold text-[29px]">Effortless</p>
              <p className="text-lg">
                Automates where your money goes every month with clarity about
                why
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="font-semibold text-[29px]">Full-picture</p>
              <p className="text-lg">
                Routes money to pay bills, manage spending, contribute to saving
                goals, and invest smartly.
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="font-semibold text-[29px]">Goal driven</p>
              <p className="text-lg">
                Tells you when you can expect to hit your goals if you implement
                this system
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="font-semibold text-[29px]">Organized</p>
              <p className="text-lg">
                Means you’re organized and making progress without having to
                stress about it.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1/2 h-full grid place-items-center">
          <div className=" h-[558px] w-[259px] sticky top-[25%] rounded-2xl overflow-hidden drop-shadow-xl">
            <video
              loop
              muted
              playsInline={true}
              autoPlay
              className="absolute w-full h-full object-cover "
            >
              <source
                src="https://cdn.prod.website-files.com/659f15a242e58eb40c8cf14b%2F681e63245aa3b94a1ff3ef0b_20250508_Fruitful_Web_Financial_System_Section%20%281%29-transcode.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
