"use client";
import { FaArrowRight } from "react-icons/fa6";
import Img from "@/assets/images/img2.png";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Crypto() {
  const variants = {
    initial: {
      x: 100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      <div className="container1 pt-20 flex flex-col-reverse lg:flex-row gap-4">
        <div className="flex-1 px-5 xl:px-0">
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="text-3xl lg:text-5xl w-80 lg:w-full lg:leading-none font-semibold text-customPurpleA"
          >
            Pi makes crypto mining easy.
          </motion.p>
          <p className="text-base lg:text-lg my-5 text-gray-600 leading-tight">
            Breakthrough tech allows you to mine Pi on your phone without
            draining your battery.
          </p>
          <div className="flex gap-3 cursor-pointer items-center w-fit text-sm lg:text-lg bg-customPurpleB text-white shadow-md rounded-md px-10 py-3 lg:py-4">
            <p>Learn the tech behin Pi</p>
            <FaArrowRight />
          </div>
        </div>
        <div className="flex-1 center">
          <Image
            src={Img}
            height={0}
            width={0}
            objectFit="cover"
            alt=""
            className="h-72 w-72 lg:h-[380px] lg:w-[420px]"
          />
        </div>
      </div>
    </div>
  );
}
