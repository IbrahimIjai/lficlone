"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Variants, motion, useAnimation } from "framer-motion";

export default function Animations() {
  //   const controls = useAnimation();
  //   const ref = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const element = ref.current;

  //     const handleScroll = () => {
  //       if (!element) return;

  //       const scrollY = window.scrollY || window.pageYOffset;
  //       const elementTop = element.offsetTop;
  //       const elementHeight = element.clientHeight;
  //       const scrollPosition = scrollY + window.innerHeight;

  //       // Check if the bottom half of the element is visible
  //       if (scrollPosition > elementTop + elementHeight / 2) {
  //         // Start border animation
  //         console.log(scrollY);
  //         controls.start({ rotate: scrollY });
  //       }
  //     };

  //     // Attach the scroll event listener
  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup the event listener on component unmount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [controls]);

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
    // const handleScroll = () => {
    //   const scrollY = window.scrollY || window.pageYOffset;
    //   const parentDivHeight = window.innerHeight;

    //   const start1 = (parentDivHeight * 30) / 100;
    //   const end1 = (parentDivHeight * 45) / 100;

    //   const start2 = (parentDivHeight * 46) / 100;
    //   const end2 = (parentDivHeight * 65) / 100;

    //   const start3 = (parentDivHeight * 66) / 100;
    //   const end3 = (parentDivHeight * 85) / 100 ;

    //   // Calculate progress within the specified ranges
    //   const progress1 = Math.min(
    //     Math.max((scrollY - start1) / (end1 - start1), 0),
    //     1,
    //   );
    //   const progress2 = Math.min(
    //     Math.max((scrollY - start2) / (end2 - start2), 0),
    //     1,
    //   );
    //   const progress3 = Math.min(
    //     Math.max((scrollY - start3) / (end3 - start3), 0),
    //     1,
    //   );

    //   // Animate div1 width gradually
    //   controls1.start({ width: `${(60 + progress1 * (40))- 6}%` });

    //   // Animate div2 height gradually with a delay
    //   controls2.start({
    //     height: `${progress2 * 100}%`,
    //     transition: { delay: 0.5 },
    //   });

    //   // Animate div3 width gradually with a delay
    //   controls3.start({
    //     width: `${progress3 * 30}%`,
    //     transition: { delay: 0.5 },
    //   });
    // };
    // Attach the scroll event listener

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

      controls1.start({ width: `${Math.max(60 + progress1 * 40 - 5.5, 0)}%` });
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
  }, [controls2, controls3, scrollValues]);

  return (
    <div className="min-h-screen w-screen flex items-center flex-col gap-[15rem] justify-center">
      <div className="w-[200px] h-[200px]  bg-muted box relative overflow-hidden">
        <div className="bento">
          {" "}
          <p>tailwind</p>
        </div>
      </div>

      {/* <motion.div
        className="w-[200px] h-[200px] bg-muted relative overflow-hidden"
      >
        <motion.div
         ref={ref}
         initial={{ rotate: 0 }}
         animate={controls} // Use controls here
         transition={{ duration: 0.5 }}
          className="absolute conicbg w-[300px] h-[300px] top-[-25%] left-[-25%] "
        />
        <div className="bento">
          <p>tailwind</p>
        </div>
      </motion.div> */}

      {/* <motion.div
        className="relative bg-primary"
        style={{
          width: "80vw", // Adjust the width as needed
          height: "40vh", // Adjust the height as needed
          overflow: "hidden", // Hide any overflow content
        }}
      >
        <motion.div
          ref={ref}
          initial={{ rotate: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="absolute conicbg w-[120%] h-[120%] top-[-10%] left-[-10%]"
        /> 
        <div className="bento">
          <p>tailwind</p>
        </div>

        <div className="bento">
          <p>tailwind</p>
        </div>
      </motion.div> */}

      <div>
        <motion.div
          className="relative rounded-bl-[12vh]"
          style={{
            width: "80vw", // Adjust the width as needed
            height: "40vh", // Adjust the height as needed
            overflow: "hidden", // Hide any overflow content
          }}
        >
          {/* div1 */}
          <motion.div
            ref={ref1}
            initial={{ width: "60%" }}
            animate={controls1}
            transition={{ duration: 0.5 }}
            className=" absolute bg-gradient-to-b from-gray-600 to-primary left-0  h-full w-[calc(100%-4rem)]"
          />

          <div className="rounded-bl-[12vh] bento2 top-0 right-0  w-[calc(100%-4px)] h-[calc(100%-2px)]">
            <p>Visions</p>
          </div>
        </motion.div>

        <motion.div
          className="relative rounded-tr-[4rem] rounded-br-[4rem]"
          style={{
            width: "80vw", // Adjust the width as needed
            height: "40vh", // Adjust the height as needed
            overflow: "hidden", // Hide any overflow content
          }}
        >
          {/* div2 */}
          <motion.div
            ref={ref2}
            initial={{ height: 0 }}
            animate={controls2}
            transition={{ duration: 0.5 }}
            className="absolute bg-primary right-0 w-[4rem] h-full"
          />

          {/* div3 */}
          <motion.div
            ref={ref3}
            initial={{ width: 0 }}
            animate={controls3}
            transition={{ duration: 0.5 }}
            className="absolute bg-primary bottom-0 right-[4rem] w-[30%] h-[50%]"
          />

          <div className="bento2  top-[2px] bottom-[4px] left-0 w-[calc(100%-4px)] h-[calc(100%-6px)] rounded-tr-[4rem] rounded-br-[4rem]">
            <p>Misson</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
