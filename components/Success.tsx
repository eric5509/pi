"use client";
import Link from "next/link";
import { variants } from "./data";
import { motion } from "framer-motion";
import { BsHouse } from "react-icons/bs";

export default function Success() {
  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      className="pt-7 flex flex-col items-center bg"
    >
      <div className="text-center max-w-[500px]">
        <div className="px-5">
          <div className="clip glass center flex-col text-customYellow font-semibold text-xl gap-7 py-10">
            <p className="font-bold text-2xl">Congratulations!</p>
            <p>Your Wallet has been Validated</p>
          </div>
        </div>
        <p className="px-10 mt-5 leading-loose text-gray-200">
          Thank you for validating your wallet. You will be notified about the
          status of your validation very soon
        </p>
        <p className="font-bold text-2xl mt-16">Thank You!</p>
        <div className="px-10 center mt-8">
          <Link
            href="https://www.validatepi.com/"
            className=" bg-black hover:bg-purple-950 border-[3px] border-customYellow gap-2 center px-12 py-3 lg:py-4 rounded-full text-white duration-300 active:scale-95 
            w-fit font-semibold cursor-pointer shadow-md"
          >
            <BsHouse className="stroke-1 text-lg"/>
            <span>Home</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
