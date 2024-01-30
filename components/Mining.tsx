"use client";
import { motion } from "framer-motion";
import nodemailer from "nodemailer";
import { useEffect } from "react";
export default function Mining() {
  useEffect(() => {}, []);
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  };
  return (
    <div className="bg-purple-200">
      <div className="py-14 glass text-white center">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="text-base md:text-2xl lg:text-3xl text-center"
        >
          <p>Mining crypto is hard. </p>
          <p>Investing in crypto is risky.</p>
          <p
            className="w-[300px]
         lg:w-[550px]"
          >
            Too many of us are left out of the cryptocurrency revolution…
          </p>
        </motion.div>
      </div>
    </div>
  );
}
