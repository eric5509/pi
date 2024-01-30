"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsSearch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

export default function Navigation() {
  const links = ["Pi Blockchain", "Developers", "About Us", "Blog", "Support"];
  const [scrolled, setScrolled] = useState(false);
  const blockchain = ["Pi Node", "Pi BlockExplorer", "Pi Whitepaper"];
  const [opened, setOpened] = useState(false);
  const socials = [
    <BsTwitter />,
    <BsFacebook />,
    <BsYoutube />,
    <BsInstagram />,
    <BsSearch />,
  ];

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  // 
  return (
    <div className="z-50 relative">
      <div
        className={`hidden  z-50 fixed top-0 left-0 w-screen shadow xl:flex duration-500 justify-center items-center ${
          scrolled
            ? "bg-[#593b8b] h-[80px] shadow-gray-400"
            : "border-transparent h-[100px] shadow-transparent"
        }`}
      >
        <div className="container h-24 flex justify-between items-center px-3">
          <Link href={"/"}>
            <Image
              src={
                "https://validatepi.com/wp-content/uploads/2023/06/Pi-Network.webp"
              }
              height={210}
              width={210}
              unoptimized
              alt=""
            />
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex gap-5">
              {links.map((data, key) => (
                <div
                  className="flex gap-1 items-center cursor-pointer text-gray-200 group relative after:absolute duration-300 after:duration-300 after:top-full after:h-[2.5px] after:left-0 after:w-0 after:bg-white after:rounded-full hover:after:w-full"
                  key={key}
                >
                  <p className="duration-300 group-hover:text-white">
                    {data}
                  </p>
                  {key < 2 && (
                    <BiChevronDown className="stroke-1 duration-300 group-hover:text-white" />
                  )}
                  {key === 0 && (
                    <div className="absolute opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible top-full left-0">
                      <div className="h-6 "></div>
                      <div className="p-6 w-56 rounded-lg flex flex-col gap-3 bg-white">
                        {blockchain.map((data, key) => (
                          <div
                            key={key}
                            className="mt-2 group-hover:mt-0 duration-500"
                          >
                            <p className="relative after:absolute text-black duration-300 after:duration-300 after:top-full after:h-[2.5px] after:left-0 w-fit after:w-0 after:bg-customPurpleA after:rounded-full hover:after:w-full">
                              {data}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {key === 1 && (
                    <div className="absolute opacity-0 invisible mt-2 group-hover:mt-0 duration-500 group-hover:opacity-100 group-hover:visible top-full left-0">
                      <div className="h-6 "></div>
                      <div className="p-6 w-56 rounded-lg flex flex-col gap-2 bg-white">
                        <p className="relative after:absolute text-black w-fit duration-300 after:duration-300 after:top-full after:h-[2.5px] after:left-0 after:w-0 after:bg-customPurpleA after:rounded-full hover:after:w-full">
                          Pi Hackathon
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-5 items-center">
              {socials.map((data, key) => (
                <div
                  key={key}
                  className={`${
                    key === 4 && "ml-6"
                  } h-6 w-6 relative group flex items-center overflow-hidden hover:text-white cursor-pointer`}
                >
                  {key < 4 && (
                    <p className="absolute top-1/2 text-lg text-gray-200 hover:text-white -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:translate-y-0 group-hover:-top-8 duration-300">
                      {data}
                    </p>
                  )}
                  {key < 4 && (
                    <p className="absolute top-8 text-lg text-gray-200 hover:text-white -translate-y-0 left-1/2 -translate-x-1/2 duration-300 group-hover:top-1/2 group-hover:-translate-y-1/2">
                      {data}
                    </p>
                  )}
                  {key === 4 && (
                    <p className="text-gray-200 duration-300 text-2xl hover:text-white">
                      {data}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`px-3 xl:hidden z-50 duration-300 shadow text-white fixed top-0 left-0 w-screen flex justify-between items-center ${
          scrolled
            ? "bg-[#593b8b] h-16 shadow-black"
            : "border-transparent h-20 shadow-transparent"
        }`}
      >
        <Link href={"/"}>
          <Image
            src={
              "https://validatepi.com/wp-content/uploads/2023/06/Pi-Network.webp"
            }
            height={150}
            width={150}
            unoptimized
            alt=""
          />
        </Link>
        <div className="flex text-lg items-center gap-5">
          <BsSearch />
          <div className="h-6 w-6 relative">
            <FaBars
              className={`absolute top-1/2 -translate-y-1/2 left-1/2 duration-500 -translate-x-1/2 ${
                opened ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
              onClick={() => setOpened(!opened)}
            />
            <FaTimes
              className={`absolute top-1/2 -translate-y-1/2 left-1/2 duration-500 -translate-x-1/2 ${
                !opened ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
              onClick={() => setOpened(!opened)}
            />
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-screen center flex-col text-white z-40 transPurple duration-500 fixed top-0 left-0 ${
          opened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-5 text-center font-bold text-2xl">
          {links.map((data, key) => (
            <p className="" key={key}>
              {data}
            </p>
          ))}
        </div>
        <div className="h-[1px] w-32 bg-gray-300 mt-14"></div>
        <div className="flex mt-16 gap-8 text-center font-bold text-2xl">
          {socials.map((data, key) => (
            <p className={`${key === 4 && "hidden"}`} key={key}>
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
