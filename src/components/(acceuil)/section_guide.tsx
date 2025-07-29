import { div } from "framer-motion/client";
import CardPersonal from "../common/card_personal";
import Container from "../common/container";

const persons = [
  {
    image: "/naima.png",
    name: "Naima Bush",
    source:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240527/Naima+Bush/Video/Low+Quality/20240527_Fruitful_Guide_Bio_Video_Naima_Bush_16x9_LQ_LC.mp4",
  },
  {
    image: "/emily.png",
    name: "Emily Vallely",
    source:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240503/Emily+Zangrillo/Video/Low+Quality/20240503_Fruitful_Video_Guide_Bio_Emily_Zangrillo_LQ_LC_16x9.mp4",
  },
  {
    image: "/matt.png",
    name: "Matt Becker",
    source:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Matt_4x3_LQ_NC.mp4",
  },
  {
    image: "/paige.png",
    name: "Paige Clausen",
    source:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_No_Captions/20240304_Fruitful_Guide_4x3_Paige_sm_nocap.mp4",
  },
  {
    image: "/colin.png",
    name: "Colin Bishop",
    source:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_No_Captions/20240304_Fruitful_Guide_4x3_Colin_sm_nocap.mp4",
  },
];

export default function SectionGuide() {
  return (
    <div className="bg-rose-300 h-screen flex items-center justify-center">
      <Container>
        <div className="flex flex-col-reverse gap-20 md:gap-0 md:flex-row md:items-center md:justify-between">
          <div className="flex-1/2">
            <div className="bg-rose-200 p-8 w-[352px] rounded-3xl">
              <p className="text-3xl font-bold mb-4">Pick your Guide</p>
              <p>
                They’re all credentialed CFP® Professionals who get to know you,
                your money, and your mindset, then build your perfect money
                system, providing advice and support at every step.
              </p>
            </div>
          </div>

          {/* images */}
          <div className="flex-1/2 flex items-center justify-center flex-wrap gap-2 ">
            {persons.map((person, idx) => (
              <div
                key={idx}
                className="h-[142px] max-w-[109px] lg:h-[234px] w-full lg:max-w-[180px] lg:nth-2:rotate-12 lg:nth-2:scale-120 lg:nth-2:z-20"
              >
                <CardPersonal
                  image={person.image}
                  name={person.name}
                  video={person.source}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
