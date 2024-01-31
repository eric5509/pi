'use client'
import { BsGlobe, BsPhone } from "react-icons/bs";
import { MdOutlineDownloading } from "react-icons/md";
import { motion } from "framer-motion";

export default function Mobile() {
   const variants = {
     initial: {
       y: 100,
     },
     animate: {
       y: 0,
       transition: {
         duration: .75,
       },
     },
   };
  const infos = [
    [
      "Decentralized",
      "Secure, Immutable, non-counterfeitableand interoperable digital money.",
      <MdOutlineDownloading />,
    ],
    [
      "Mobile First",
      "Works on your mobile phone and does not drain your battery.",
      <BsPhone />,
    ],
    [
      "User & Planet-Friendly",
      "Easy to use, secure at scale, without the massive electrical waste.",
      <BsGlobe />,
    ],
  ];
  return (
    <div className="container1 px-3 lg:px-0 pt-10 pb-28">
      <motion.div variants={variants} initial="initial" whileInView="animate" className="flex flex-col lg:flex-row gap-5">
        {infos.map((data, key) => (
          <div key={key} className="flex p-5 flex-col items-center justify-center text-center shadow-md lg:shadow-xl shadow-gray-700 border rounded-md">
            <p className="text-customPurpleB text-xl lg:text-2xl">{data[2]}</p>
            <p className="mt-10 text-gray-600 mb-3 text-base lg:text-lg font-semibold">
              {data[0]}
            </p>
            <p className=" text-gray-600">{data[1]}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
