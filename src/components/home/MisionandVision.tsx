"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function MisionandVision() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const scrollValues = useMemo(() => {
    const parentDivHeight = window.innerHeight;

    const start1 = (parentDivHeight * 40) / 100;
    const end1 = (parentDivHeight * 65) / 100;

    const start2 = (parentDivHeight * 70) / 100;
    const end2 = (parentDivHeight * 85) / 100;

    const start3 = (parentDivHeight * 90) / 100;
    const end3 = parentDivHeight;

    return { start1, end1, start2, end2, start3, end3 };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      const progress1 = Math.min(
        Math.max(
          (scrollY - scrollValues.start1) /
            (scrollValues.end1 - scrollValues.start1),
          0,
        ),
        1,
      );
      const progress2 = Math.min(
        Math.max(
          (scrollY - scrollValues.start2) /
            (scrollValues.end2 - scrollValues.start2),
          0,
        ),
        1,
      );
      const progress3 = Math.min(
        Math.max(
          (scrollY - scrollValues.start3) /
            (scrollValues.end3 - scrollValues.start3),
          0,
        ),
        1,
      );

      controls1.start({ width: `${Math.max(60 + progress1 * 40 - 5.2, 0)}%` });
      controls2.start({
        height: `${progress2 * 100}%`,
        // transition: { delay: 0.5 },
      });
      controls3.start({
        width: `${progress3 * 30}%`,
        // transition: { delay: 0.5 },
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls1, controls2, controls3, scrollValues]);
  return (
    // <div className="min-h-screen w-screen flex items-center justify-center">
    //   <div>
    //     <motion.div
    //       className="relative rounded-bl-[12vh]"
    //       style={{
    //         width: "80vw", // Adjust the width as needed
    //         height: "40vh", // Adjust the height as needed
    //         overflow: "hidden", // Hide any overflow content
    //       }}
    //     >
    //       {/* div1 */}
    //       <motion.div
    //         ref={ref1}
    //         initial={{ width: "60%" }}
    //         animate={controls1}
    //         transition={{ duration: 0.5 }}
    //         className=" absolute bg-gradient-to-b from-gray-600 to-primary left-0  h-full w-[calc(100%-4rem)]"
    //       />

    //       <div className="rounded-bl-[12vh] bento2 top-0 right-0  w-[calc(100%-4px)] h-[calc(100%-2px)]">
    //         <div>
    //             <div>
    //                 <h3>Our</h3>
    //                 <h1>Vision</h1>
    //             </div>
    //             <div>

    //             </div>
    //         </div>
    //       </div>
    //     </motion.div>

    //     <motion.div
    //       className="relative rounded-tr-[4rem] rounded-br-[4rem]"
    //       style={{
    //         width: "80vw", // Adjust the width as needed
    //         height: "40vh", // Adjust the height as needed
    //         overflow: "hidden", // Hide any overflow content
    //       }}
    //     >
    //       {/* div2 */}
    //       <motion.div
    //         ref={ref2}
    //         initial={{ height: 0 }}
    //         animate={controls2}
    //         transition={{ duration: 0.5 }}
    //         className="absolute bg-primary right-0 w-[4rem] h-full"
    //       />

    //       {/* div3 */}
    //       <motion.div
    //         ref={ref3}
    //         initial={{ width: 0 }}
    //         animate={controls3}
    //         transition={{ duration: 0.5 }}
    //         className="absolute bg-primary bottom-0 right-[4rem] w-[30%] h-[50%]"
    //       />

    //       <div className="bento2  top-[2px] bottom-[4px] left-0 w-[calc(100%-4px)] h-[calc(100%-6px)] rounded-tr-[4rem] rounded-br-[4rem]">
    //         <p>Misson</p>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <div>
      <svg
        className="d-block d-sm-none"
        width="100%"
        height="100%"
        viewBox="0 0 400 579"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#070A0B"></stop>
            <stop offset="20%" stop-color="#464646"></stop>
            <stop offset="100%" stop-color="#04FCA3"></stop>
          </linearGradient>
        </defs>
        <path
          className=""
          d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803"
        ></path>
        <path
          stroke="url(#gradient)"
          className="visionMissionPath"
          d="M1 0.5V231.173C1 247.742 14.4315 261.173 31 261.173H369C385.569 261.173 399 274.605 399 291.173V548C399 564.569 385.569 578 369 578H337.902H276.803"
          pathLength="1"
          stroke-dashoffset="0px"
          stroke-dasharray="0.9130041939871651px 1px"
        ></path>
      </svg>
    </div>
  );
}
