"use client";

import { LampContainer } from "@/components/Lamp";
import { motion } from "framer-motion";
import { kumbh_sans } from "@/lib/fonts";
import { Card } from "@/components/Card";


export default function Home() {
  return (
    <div className="bg-black flex justify-center font-[family-name:var(--font-geist-sans)]">
      <LampContainer className="mb-96">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`xl:text-9xl md:text-8xl sm:text-6xl text-5xl ${kumbh_sans.className} font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600`}>
          THAT'S FIRE!
        </motion.h1>
        <div className="mt-32 grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-2 justify-center items-center card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </LampContainer>
    </div>
  );
}
