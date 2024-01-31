'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
   const variants2 = {
     initial: {
       opacity: 0,
     },
     animate: {
       opacity: 1,
       transition: {
         duration: .5,
       },
     },
   };
  const links1 = ["Pi Whitepaper", "Support & FAQ", "Terms of Service"];
  const links2 = ["Privacy Policy","Developer Terms of Use", "Pi Trademark"];
  return (
    <motion.div
      variants={variants2}
      initial="initial"
      whileInView="animate"
      className="py-20 bg-[#252525] text-white"
    >
      <div className="grid container1 grid-cols-1 gap-12 lg:text-[17x] lg:gap-0 px-3 xl:px-0 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          {links1.map((data, key) => (
            <p
              className="text-gray-300 duration-300 hover:text-white cursor-pointer"
              key={key}
            >
              {data}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {links2.map((data, key) => (
            <p
              className="text-gray-300 duration-300 hover:text-white cursor-pointer"
              key={key}
            >
              {data}
            </p>
          ))}
        </div>
        <div className="">
          <Link href={"/"}>
            <Image
              src={
                "https://validatepi.com/wp-content/uploads/2023/06/Pi-Network.webp"
              }
              height={230}
              width={230}
              unoptimized
              alt=""
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
