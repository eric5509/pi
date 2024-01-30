'use client'
import Image from "next/image";
import Google from "@/assets/images/google_play.webp";
import Apple from "@/assets/images/apple_store-300x89.webp";
import Phone from "@/assets/images/img3.webp";
import { motion } from "framer-motion";
export default function Download() {
  const variants = {
    initial: {
      x: -100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="gradient py-20">
      <div className="grid text-white container2 grid-cols-1 gap-7 lg:gap-0 md:grid-cols-[1fr_1.25fr]">
        <div className="center">
          <Image
            src={Phone}
            height={0}
            width={0}
            alt=""
            className="w-44 object-contain cursor-pointer"
          />
        </div>
        <div className="px-3 lg:px-0">
          <div className="">
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="text-3xl lg:text-4xl text-customYellow leading-normal mb-8"
            >
              Download the mobile app to start mining today! Join now.
            </motion.div>
            <p>Keep your money!.Mining Pi is free</p>
            <p>
              All you need is an invitation from an existing trusted member on
              the network.
            </p>
            <p>If you have an invitation</p>
            <p>you can download the mobile app </p>
            <p>below</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-8">
            <Image
              src={Google}
              height={0}
              width={0}
              alt=""
              className="w-48 object-contain cursor-pointer"
            />
            <Image
              src={Apple}
              height={0}
              width={0}
              alt=""
              className="w-48 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
