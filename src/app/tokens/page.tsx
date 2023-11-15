import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tab";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function TokensPage() {
  return (
    <div className="mt-[7rem] px-[2rem] lg:flex w-screen min-h-screen items-center justify-center">
      <div className="lg:flex justify-between  w-full lg:w-[90%] h-full">
        <Tabs
          defaultValue={tokensList[0].tokenName}
          className="flex flex-col items-center lg:flex-1 lg:items-start lg:justify-between lg:py-[4rem]"
        >
          <TabsList className="flex gap-4 bg-background">
            {tokensList.map((item) => (
              <TabsTrigger
                className=" px-5 lg:px-8 border text-xl  border-gray-500 rounded-full data-[state=active]:bg-primary/30"
                key={item.tokenName}
                value={item.tokenName}
              >
                {item.tokenName}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="relative w-[366px] h-[301px] lg:hidden">
            <Image
              src="/img/token-clfi.png"
              fill
              className="object-contain"
              alt="LFI token Logo"
            />
          </div>
          {tokensList.map((item) => {
            return (
              <TabsContent key={item.tokenName} value={item.tokenName}>
                <TokenDetails
                  tokenName={item.tokenName}
                  tokenDetails={item.tokenDetails}
                />
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="relative w-full h-[480px] hidden lg:inline-flex flex-1">
          <Image
            src="/img/token-clfi.png"
            fill
            className="object-contain"
            alt="LFI token Logo"
          />
        </div>
      </div>
    </div>
  );
}

type tokens = {
  tokenName: string;
  tokenDetails: string;
};
const tokensList: tokens[] = [
  {
    tokenName: "LFi",
    tokenDetails:
      " LFi is the native token of the LFi ecosystem that provides users the access to the networks services.",
  },
  {
    tokenName: "cLFi",
    tokenDetails:
      " cLFi is the collateral token of LFi ecosystem, which allows users to participate in the Proof-of-coverage minting.",
  },
  {
    tokenName: "vLFi",
    tokenDetails:
      " vLFi holders will receive rewards, obtain discounts, get wider allocations in launchpad, and more.",
  },
];
const TokenDetails = ({ tokenName, tokenDetails }: tokens) => (
  <div className="flex items-center lg:items-start flex-col gap-7">
    <h1 className="heading">{tokenName} Token</h1>
    <p className="ml-8 text-center lg:text-left text-xl lg:w-3/5">
      {tokenDetails}
    </p>
    <div className="ml-8 flex gap-3">
      <Button className="text-xl">Buy {tokenName}</Button>
      <Button className="text-xl" variant="outline">
        More about {tokenName}
      </Button>
    </div>
  </div>
);
