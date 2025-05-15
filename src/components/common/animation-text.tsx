"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  "Colin is a real Fruitful Guide",
  "Maya is a real Fruitful Member",
  "Andrew is a real Fruitful Guide",
  "Raquel is a real Fruitful Guide",
  "Daniela is a real Fruitful Member",
  "Durriya is a real Fruitful Guide",
  "Steph is a real Fruitful Member",
  "Sharise is a real Fruitful Member",
  "Rebecca is a real Fruitful Member",
  "Misha is a real Fruitful Member",
];

export default function AnimationText() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  const next = () => {
    setShow(false); // Trigger exit
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setShow(true); // Trigger enter
    }, 500); // Match the exit duration
  };

  useEffect(() => {
    const timer = setTimeout(next, 1000); // Durée d'affichage du texte
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="text-white text-2xl h-auto overflow-hidden ">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={texts[index]}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.5 }}
          >
            {texts[index]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
