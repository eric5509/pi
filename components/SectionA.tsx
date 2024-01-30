"use client";
import Img from "@/assets/images/img1.webp";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SectionA() {
    const variants = {
      initial: {
        y: 50,
      },
      animate: {
        y: 0,
        transition: {
          duration: .75,
        },
      },
    };
    const variants2 = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      },
    };

  return (
    <div className="min-h-screen w-full bg">
      <div className="container z-20 relative grid grid-cols-1 gap-10 xl:grid-cols-[2fr_1fr]">
        <div className="pt-36 px-3 xl:px-0">
          <motion.p variants={variants2} initial="initial" animate="animate" className="text-3xl lg:text-[53px] font-semibold lg:leading-[1.2] mb-6">
            The First Digital Currency You Can Mine On Your Phone
          </motion.p>
          <motion.p variants={variants} initial="initial" animate="animate"  className="text-base lg:text-xl font- mb-4 lg:mb-6 lg:w-[550px]">
            Start mining Pi cryptocurrency today with our free, energy-light
            mobile app!
          </motion.p>
          <Link
            href={"/validate"}
            className="px-5 lg:px-7 py-3 duration-300 cursor-pointer w-fit rounded-md center gap-3 text-customYellow hover:shadow-black hover:bg-black hover:shadow font-semibold capitalize tex-xs lg:text-base flex border-2 border-customYellow"
          >
            <p>Validate your wallet</p>
            <BsCheck className="text-2xl lg:text-3xl" />
          </Link>
        </div>
        <div className="center relative pb-3">
          <Image
            src={Img}
            height={0}
            width={0}
            objectFit="cover"
            alt=""
            className="absolute hidden xl:block h-[833px] w-[500px] -right-10 -top-5"
          />
          <div className="px-3 w-full xl:px-0">
            <iframe
              className="elementor-video h-60 w-full xl:hidden rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Pi"
              src="https://www.youtube.com/embed/MsOaC61cR3U?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fvalidatepi.com&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
