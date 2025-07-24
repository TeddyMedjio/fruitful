import localFont from "next/font/local";

export const ppnuemontreal = localFont({
  src: [
    {
      path: "../app/fonts/ppneuemontreal-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/ppneuemontreal-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
