"use client";
import Link from "next/link";
import Container from "../common/container";
import { ButtonInitial } from "../common/button-initial";
import ImageDialog from "./DialogPersonal";
import { cn } from "@/lib/utils";

const images = [
  {
    id: 1,
    src: "/naima.png",
    title: "Naima Bush",
    description:
      "Naima has 8 years of financial planning and advising experience. She thrives on inspiring people to confidently take control of their finances with tailored advice and easy-to-apply education. She previously worked at the fintech company Pattern and, before that, Mercer Advisors. Outside of work, Andrea orchestrates the offense as point guard of her local women's basketball team.",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240527/Naima+Bush/Video/Low+Quality/20240527_Fruitful_Guide_Bio_Video_Naima_Bush_16x9_LQ_LC.mp4",
  },
  {
    id: 2,
    src: "/andrew.png",
    title: "Andrew Rotz",
    description:
      "Andrew has worked in financial services since 2012. He loves seeing the relief that comes when he helps his Members alleviate a major stressor in their financial lives. He's worked at Fidelity Investments, built a bespoke financial wellness program at NC State University, and his own firm while also serving in the US Navy. He loves exploring the Star Wars world with his two boys, traveling around the real world, and history!",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Andrew_4x3_LQ_NC.mp4",
  },
  {
    id: 3,
    src: "/emily.png",
    title: "Emily Vallely",
    description:
      "Emily has 7 years of planning and advising experience. She’s deeply committed to helping people make more informed money decisions at every step of their financial journey. She previously worked at Merrill Lynch in wealth management. In her free time, Brianna’s into exploring the Pittsburgh food scene, jamming to Taylor Swift in spin class, and reading while cozying up with her cats, Randy and Jim Bob. ",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240503/Emily+Zangrillo/Video/Low+Quality/20240503_Fruitful_Video_Guide_Bio_Emily_Zangrillo_LQ_LC_16x9.mp4",
  },
  {
    id: 4,
    src: "/matt.png",
    title: "Matt Becker",
    description:
      "Matt has 10 years of financial planning experience and another 6 years working in early-stage technology. He's passionate about getting to know his members, what they value, and what they truly want out of life so money can empower them to be the fullest versions of themselves. Matt previously ran his own practice working mostly with young families. His favorite thing in the world is coaching his boys' soccer teams.",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Matt_4x3_LQ_NC.mp4",
  },
  {
    id: 5,
    src: "/paige.png",
    title: "Paige Clausen",
    description:
      "Paige has 6 years of financial planning experience and an additional 4 years of tax-focused experience. She loves making complex concepts simple and actionable. She previously worked at Merrill Lynch, Ernst & Young, and the fintech company Albert. She loves, like LOVES, cooking.",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_No_Captions/20240304_Fruitful_Guide_4x3_Paige_sm_nocap.mp4",
  },
  {
    id: 6,
    src: "/colin.png",
    title: "Colin Bishop",
    description:
      "Colin has 11 years of planning and advising experience. He’s passionate about building people’s confidence to pursue their financial goals while saving them time and energy. He previously worked at Morgan Stanley before building his own financial planning firm. He loves soccer, volleyball, and hiking with his partner, Ali.",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_No_Captions/20240304_Fruitful_Guide_4x3_Colin_sm_nocap.mp4",
  },
];

export default function Professionals() {
  return (
    <Container>
      <div className=" grid place-items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-4xl md:text-5xl text-center font-semibold">
            Your Guide to financial freedom
          </h2>
          <p className=" text-sm md:text-base max-w-sm text-center my-5">
            Skilled, supportive CFP® Professionals that give 1-on-1 advice that
            leads to quick, thoughtful action.
          </p>

          <ButtonInitial variant="outline" asChild>
            <Link href="/">Meet them All</Link>
          </ButtonInitial>
        </div>

        {/* images */}
        <div className="grid place-items-center w-full lg:max-w-[950px] mt-10">
          <div className="flex items-center justify-center -space-x-10 w-full">
            {images.map((img, index) => (
              <div
                key={img.id}
                className="h-[142px] max-w-[109px] md:h-[281px] w-full md:max-w-[211px] drop-shadow-lg drop-shadow-black/20 transition duration-300 ease-in-out nth hover:nth-[n]:-rotate-5 hover:nth-[n]:scale-110 hover:nth-[n]:z-20 nth-[1]:-rotate-2 nth-[2]:rotate-2 nth-[3]:-rotate-2 nth-[4]:rotate-1 nth-[5]:-rotate-3 nth-[6]:rotate-3"
              >
                <ImageDialog
                  images={images}
                  triggerImage={img}
                  triggerIndex={index}
                />
              </div>
            ))}
          </div>
          <ButtonInitial
            variant="default"
            asChild
            className={cn("mt-10 md:mt-0")}
          >
            <Link href="/">Chooce your Guide</Link>
          </ButtonInitial>
        </div>
      </div>
    </Container>
  );
}
