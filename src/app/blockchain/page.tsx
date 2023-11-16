"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Blockhain() {
  return (
    <div className="w-screen pt-16">
      <div className="flex justify-center items-center px-8 lg:px-[6rem]">
        <div className="flex lg:gap-[6rem] w-full lg:h-full lg:flex-1 lg:flex-row flex-col items-center h-screen">
          <div className="flex flex-col items-center gap-4 lg:items-start flex-1">
            <h1 className="heading "> LFi Blockchain </h1>
            <h3 className="max-w-[450px] text-center lg:text-left text-[#919aa7]">
              An independent blockchain boasting smart contract capabilities,
              dApps, and compatibility with the Ethereum Virtual Machine (EVM).
              The LFi Blockchain is a digital space developed according to
              fundamental Web3 principles.
            </h3>
            <h3 className="max-w-[450px] text-center lg:text-left text-[#919aa7]">
              It democratizes value creation by serving as a place for people to
              innovate, collaborate, and participate in projects and movements
              that build individual independence. The blockchain communicates
              seamlessly with LFi&apos;s proprietary devices, starting with the
              LFi One crypto phone and our pioneering line of xLFi minting
              machines.
            </h3>
            <Link className="buttonLink" href="/more">
              Open Explorer
            </Link>
          </div>
          <div
            className="relative flex-1 w-full h-[250px]"
            style={{ height: "calc(100vh - 250px)" }}
          >
            <Image
              src="/img/blockchainbanner.png"
              alt="An illustration of blockchain"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-14">
        <div className="border border-[#424242] flex lg:flex-row flex-col items-center  rounded-xl m-4 py-[70px] px-[50px] lg:w-[75%]">
          <div className="lg:flex-1 flex flex-col gap-3">
            <h1 className="text-white lg:w-1/2 text-2xl font-normal">
              {" "}
              LFi Blockchain is our answer to common limitations:{" "}
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-4 ml-4">
              {list.map((item, index) => (
                <li key={index} className="text-lg font-light  text-[#919aa7]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative lg:flex-1 w-full  h-[350px]">
            <Image
              src="/img/blockchinLimit.png"
              alt="An illustration of blockchain"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-4/5 mb-20 mx-auto text-2xl lg:text-4xl text-center font-medium text-white py-[100px] px-[50px]">
        {" "}
        Starting out, our ecosystems native tokens and dApps take their first
        steps on the Polygon Chain. But by late 2023, we are pushing boundaries
        by launching our very own blockchain, a fork of the Ethereum 2.0, named
        the LFi Blockchain.
      </div>
      <div className="w-screen px-6 lg:p-[4rem] lg:mt-[4rem]">
        <h1 className="heading mx-auto text-center mb-8">LFi dApps</h1>
        <div className="flex flex-wrap px-2 mt-8 gap-12 lg:gap-[3.5rem] justify-center">
          {dapps.map((item, i) => (
            <div
              key={i}
              className="p-8 group w-full max-w-lg lg:w-1/2 relative frame"
            >
              <div className="line"></div>
              <div className="angle"></div>
              <article>
                <div className="relative h-[70px] w-[70px] mb-5">
                  <Image
                    src={item.imageUrl}
                    alt={`illustration of a ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="font-semibold text-white text-xl mb-5">
                  {item.title}
                </h1>
                <p>{item.text}</p>
                <Button className="mt-5 rounded-[25px] bg-[#141616] text-[#79828b] px-[25px] group-hover:bg-primary group-hover:text-black">
                  Learn More
                </Button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const dapps = [
  {
    title: "L-DAO",
    imageUrl: "/img/dapp-ldao.png",
    text: " Enjoy complete autonomy. L-DAO is an ecosystem that is built for you, controlled by you, and owned by you.",
  },
  {
    title: "Bridge",
    imageUrl: "/img/dapp-bridge.png",
    text: "Connecting multiple blockchains to bring more users together. ",
  },
  {
    title: "Launchpad",
    imageUrl: "/img/dapp-launchpad.png",
    text: " If you own a token, propel your business to new levels by utilizing the LFi Launchpad. ",
  },
  {
    title: "Software-wallet",
    imageUrl: "/img/dapp-wallet.png",
    text: "Free, secure, and decentralized app that puts over 1,000 cryptocurrencies at your fingertips. ",
  },
];
const list = [
  "The restrictiveness of a centralized blockchain with just 21 nodes.",
  "The bottleneck of 300 transactions per second.",
  "The absence of a DAO system to drive blockchain development.",
];
