import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blockhain() {
  return (
    <div className="w-screen">
      <div className="h-screen flex justify-center items-center px-8 lg:px-[6rem]">
        <div className="flex gap-[6rem] w-full lg:h-full lg:flex-1 lg:flex-row flex-col items-center">
          <div className=" flex flex-col items-center gap-4 lg:items-start">
            <h1 className="heading "> LFi Blockchain </h1>
            <h3 className="max-w-[450px] text-center lg:text-left">
              An independent blockchain boasting Smart Contract capabilities,
              dApps and compatibility with the Ethereum Virtual Machine (EVM).
            </h3>
            <Link className="buttonLink" href="/more">
              Learn More
            </Link>
          </div>
          <div className="relative m-8 lg:flex-1 w-full lg:w-1/2 h-[250px] lg:h-full">
            <Image
              src="/img/blockchainbanner.png"
              alt="An illustration of blockchain"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="border border-gray-500 flex lg:flex-row flex-col items-center  rounded-xl m-4 p-12 lg:w-[75%]">
          <div className="lg:flex-1 flex flex-col gap-3">
            <h1 className="text-white font-semibold lg:w-1/2 text-xl">
              {" "}
              LFi Blockchain is our answer to common limitations:{" "}
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li className="">
                {" "}
                The restrictiveness of a centralized blockchain with just 21
                nodes.{" "}
              </li>
              <li className="">
                {" "}
                The bottleneck of 300 transactions per second.{" "}
              </li>
              <li className="">
                {" "}
                The absence of a DAO system to drive blockchain development.{" "}
              </li>
            </ul>
          </div>
          <div className="relative lg:flex-1 w-full  h-[250px]">
            <Image
              src="/img/blockchinLimit.png"
              alt="An illustration of blockchain"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-4/5 mx-auto text-2xl lg:text-4xl text-center font-medium text-white">
        <p>
          {" "}
          Starting out, our ecosystems native tokens and dApps take their first
          steps on the Polygon Chain. But by late 2023, we are pushing
          boundaries by launching our very own blockchain, a fork of the
          Ethereum 2.0, named the LFi Blockchain.{" "}
        </p>
      </div>

      <div className="w-screen px-6 lg:p-[4rem] lg:mt-[4rem]">
        <h1 className="heading mx-auto text-center mb-8">LFi dApps</h1>
        <div className="grid px-4 lg:grid-cols-2 gap-8 lg:gap-[3.5rem] ">
          {dapps.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-start gap-3 border-[1px] border-primary p-8"
              >
                <div className="relative h-[70px] w-[70px]">
                  <Image
                    src={item.imageUrl}
                    alt={`illustration of a ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="font-semibold text-white text-xl">
                  {item.title}
                </h1>
                <p>{item.text}</p>
              </div>
            );
          })}
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
