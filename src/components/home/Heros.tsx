import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";
import { Separator } from "../../components/ui/Seperator";
export default function Heros() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-[3rem]">
      <h1 className="heading my-8 text-center">Trades on</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex lg:flex-1 items-center justify-center flex-col w-full border rounded-xl border-gray-500 p-6">
          <div className="flex items-center gap-8 p-4">
            <div className="relative w-[85px] h-[89px]">
              <Image
                src="/img/token-clfi.png"
                fill
                alt="Lfi token logo"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-medium text-white ">LFi</h1>
              <p className="font-bold text-primary text-2xl">$0.92569148</p>
              <p className="text-xl"> 24H Vol: $1,941,829.7</p>
            </div>
          </div>
          <Separator />
          <div className="w-full flex flex-col items-start gap-4 mt-4 ">
            <p>Trade On</p>
            <div className="grid grid-cols-4 w-full">
              {tradeOnLog.map((logo, i) => {
                return (
                  <div key={i} className="relative w-full h-[30px]">
                    <Image
                      src={logo}
                      alt={logo}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-1 items-center justify-center flex-col w-full border rounded-xl border-gray-500 p-6">
          <div className="flex items-center gap-8 p-4">
            <div className="relative w-[85px] h-[89px]">
              <Image
                src="/img/token-clfi.png"
                fill
                alt="Lfi token logo"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-medium text-white ">LFi</h1>
              <p className="font-bold text-primary text-2xl">$0.92569148</p>
              <p className="text-xl"> 24H Vol: $1,941,829.7</p>
            </div>
          </div>
          <Separator />
          <div className="w-full flex flex-col items-start gap-4 mt-4 ">
            <p>Trade On</p>
            <div className="grid grid-cols-4 w-full">
              {tradeOnLog.map((logo, i) => {
                return (
                  <div key={i} className="relative w-full h-[30px]">
                    <Image
                      src={logo}
                      alt={logo}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tradeOnLog: string[] = [
  "/img/lyotrade.png",
  "/img/lbank.png",
  "/img/bitmart.png",
  "/img/bitforex.png",
];
