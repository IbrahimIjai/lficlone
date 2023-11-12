"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "../ui/Button";
export default function MisionandVision() {
  const controls = useAnimation();
  const svgRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const svgHeight = svgElement.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const triggerPoint = viewportHeight * 0.84;
    console.log("this is svg height", svgHeight);
    console.log("this is triggerPoint", triggerPoint);

    const scrollHandler = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const svgPosition =
        svgElement.getBoundingClientRect().top + window.scrollY;

      if (svgPosition < scrollY + triggerPoint) {
        const progress = (scrollY + triggerPoint - svgPosition) / svgHeight;
        controls.start({
          opacity: 1,
          pathLength: progress,
          // transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [controls]);

  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-[80%] relative">
        {isDesktop ? (
          <figure ref={svgRef} className="visionProgressBar hidden lg:block">
            <motion.svg
              className=" hidden lg:block"
              width="100%"
              height="100%"
              viewBox="0 0 1101 596"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#070A0B"></stop>
                  <stop offset="20%" stop-color="#5adbe2"></stop>
                  <stop offset="100%" stop-color="#5adbe2"></stop>
                </linearGradient>
              </defs>
              {/* <motion.path
    animate={controls}
    initial={{ opacity: 0, pathLength: 0 }}
    className=""
    d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577"
  ></motion.path> */}
              <motion.path
                animate={controls}
                initial={{ opacity: 0, pathLength: 0.5 }}
                stroke="url(#gradient)"
                className="stroke-[3px]"
                d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577"
                pathLength="1"
                stroke-dashoffset="0px"
                stroke-dasharray="1px 1px"
              ></motion.path>
            </motion.svg>
          </figure>
        ) : (
          <figure ref={svgRef} className="visionProgressBar">
            <motion.svg
              className="block"
              width="100%"
              height="100%"
              viewBox="0 0 400 579"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#070A0B"></stop>
                  <stop offset="20%" stop-color="#5adbe2"></stop>
                  <stop offset="100%" stop-color="#5adbe2"></stop>
                </linearGradient>
              </defs>
              {/* <motion.path
              animate={controls}
              initial={{ opacity: 0, pathLength: 0 }}
              className=""
              d="M1 0.5V266.5C1 283.069 14.4315 296.5 31 296.5H1070C1086.57 296.5 1100 309.931 1100 326.5V565C1100 581.569 1086.57 595 1070 595H931.289H762.577"
            ></motion.path> */}
              <motion.path
                animate={controls}
                initial={{ opacity: 0, pathLength: 0.5 }}
                stroke="url(#gradient)"
                className="stroke-[3px]"
                d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803"
                pathLength="1"
                stroke-dashoffset="0px"
                stroke-dasharray="1px 1px"
              ></motion.path>
            </motion.svg>
            
          </figure>
        )}
      </div>

      <div className="absolute top-8 left-0 right-0 py-6 bottom-0 mx-auto w-[90%] md:w-[70%] lg:w-[80%] px-4 md:px-10  h-[65%] flex flex-col gap-4 justify-between">
        {divItems.map((item) => {
          return (
            <div
              className={`gap-8 flex-1 flex flex-col px-3 lg:flex-row md:px-16  lg:justify-between ${
                item.title == "Mission"
                  ? "items-start h-full mt-12 text-left"
                  : "mt-4 items-end text-right lg:flex-row-reverse"
              }`}
              key={item.title}
            >
              {" "}
              <div>
                <h4 className="text-white text-xl my-2 ">{item.subTitle}</h4>
                <h1 className="text-white font-semibold text-4xl">
                  {item.title}
                </h1>
              </div>
              <p className="md:w-[70%] text-xl lg:text-2xl ">{item.text}</p>
            </div>
          );
        })}
      </div>
      <Button className="text-center">Ecosystem</Button>
    </div>
  );
}

const divItems = [
  {
    subTitle: "Our",
    title: "Mission",
    text: "A decentralized, sustainable, and fair global economy where everyone has the chance to achieve financial independence and participate in wealth creation.",
  },
  {
    subTitle: "Became",
    title: "Vision",
    text: "To empower individuals to take control of their wealth by providing accessible financial opportunities through a platform driven by a DAO community.",
  },
];
