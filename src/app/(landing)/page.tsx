"use client";
import Heros from "@/components/home/Heros";
import Image from "next/image";
import Link from "next/link";
import { patnersLogo } from "@/config/data";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[url(/herologo.png)] flex-col bg-no-repeat w-screen bg-center bg-75% lg:bg-25% items-center flex justify-center">
        <div className="px-4 lg:w-[50%] lg:px-12 text-center flex flex-col items-center gap-8">
          <h1 className="font-bold text-3xl lg:text-6xl ">
            Build Your Independence
          </h1>
          <h3 className="text-gray-500 text-base lg:text-lg">
            LFi is a decentralized platform designed to provide equal
            opportunities for wealth generation and financial independence
            through crypto.
          </h3>
          <Link
            href="/"
            className="bg-primary rounded-full px-4 py-2 text-gray-900"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="h-screen ">
        <div className="w-full flex items-center my-4">
          <h1 className="heading">As Seen On</h1>
        </div>
        <div className="grid w-[95%] lg:w-[90%] mx-auto grid-cols-2 lg:grid-cols-4 gap-8">
          {patnersLogo.map((item, i) => {
            return (
              <div
                key={i}
                className="border hover:bg-gray-800 cursor-pointer hover:border-primary transition-all duration-500 rounded-lg"
              >
                <div className="relative overflow-hidden w-full h-[60px]">
                  <Image
                    src={item}
                    alt="Patners Logo"
                    fill
                    className="object-contain p-4 "
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full flex items-center mt-8">
          <Link className="buttonLink mx-auto" href="/seen_on">
            View More
          </Link>
        </div>
      </div>
      <Heros />
    </>
  );
}

{
  /* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
<Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>
</div> */
}
