import Image from "next/image";
import { Separator } from "../ui/Seperator";
export default function Trades() {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:px-[3rem] w-full relative">
      <h1 className="heading my-12 lg:my-16 text-center ">Trade on</h1>

      <div className="grid md:grid-cols-2 gap-8 w-full md:px-8 md:gap-12 relative">
        {[0, 1].map((_) => (
          <div
            className="flex items-center justify-center md:items-start flex-col w-full border rounded-xl border-gray-500 p-4"
            key={_}
          >
            <div className="flex items-center gap-4 justify-between mb-4">
              <div className="hidden min-[400px]:block relative w-[85px] h-[89px]">
                <Image
                  src="/img/token-clfi.png"
                  fill
                  alt="Lfi token logo"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <h1 className="font-medium text-white text-xl">
                  {_ === 0 ? "LFi" : "cLFi"}
                </h1>
                <p className="font-bold text-primary text-2xl">$0.92569148</p>
                <p className="text-base"> 24H Vol: $1,941,829.7</p>
              </div>
            </div>
            <Separator />
            <div className="w-full flex flex-col items-start gap-4 mt-4 ">
              <p>Trade On</p>
              <div className="grid grid-cols-2 min-[400px]:grid-cols-4 w-full">
                {tradeOnLog.map((logo, i) => (
                  <div key={i} className="relative w-full h-[30px]">
                    <Image
                      src={logo}
                      alt={logo}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
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
