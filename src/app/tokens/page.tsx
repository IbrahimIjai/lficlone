import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tab";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function TokensPage() {
  return (
    <div className="mt-[7rem] px-[2rem] lg:flex w-screen min-h-screen items-center justify-center">
      <div className="lg:flex justify-between w-full lg:w-[90%] h-full">
        <Tabs
          defaultValue={tokensList[0].tokenName}
          className="flex flex-col items-center lg:flex-1 lg:items-start lg:justify-between"
        >
          <TabsList className="flex gap-4 bg-background">
            {tokensList.map((item) => (
              <TabsTrigger
                className="px-5 lg:px-8 border text-base border-gray-500 rounded-full data-[state=active]:bg-primary/30"
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
      "LFi is the native token of the LFi ecosystem. It provides users access to the networks services and can be used for a variety of purposes, such as sending digital assets from one location to another, minting a fresh token, or calling a smart contract and accessing the benefit of the ecosystem.   ",
  },
  {
    tokenName: "cLFi",
    tokenDetails:
      "cLFi is the minting Utility token token of LFi ecosystem. It allows users to participate in proof-of-coverage minting. With the cLFi token, users can activate the NFT Unit license, which will give them the capability to participate in staking opportunities or the minting of fresh tokens. cLFi tokens can be locked into specific Cloud Minting X NFT licenses, allowing token holders to officially become minters within the LFi blockchain.",
  },
  {
    tokenName: "vLFi",
    tokenDetails:
      "The vLFi  token is a non-transferrable token that can only be obtained by vesting LFi tokens in the Vesting Protocol, essentially locking up the LFi tokens in exchange for an equal amount of vLFi tokens. For each LFi committed, one vLFi is automatically transferred into the wallet of the user. vLFi holders enjoy exclusive benefits such as eligibility for rewards, discounts within the LFi ecosystem, wider allocations in Launchpad, and more. ",
  },
];
const TokenDetails = ({ tokenName, tokenDetails }: tokens) => (
  <div className="flex items-center lg:items-start flex-col gap-7 m-auto w-full md:w-1/2 lg:w-full">
    <h1 className="heading !text-[40px] !lg:text-6xl">{tokenName} Token</h1>
    <p className="ml-8 text-center text-[#919aa7] lg:text-left text-base lg:text-lg lg:w-3/5">
      {tokenDetails}
    </p>
    <div className="ml-8 lg:ml-0 flex gap-3">
      {tokenName !== "vLFi" && (
        <Button className="text-sm px-6 rounded-3xl">Buy {tokenName}</Button>
      )}
      <Button
        className="text-sm px-6 rounded-3xl"
        variant={tokenName !== "vLFi" ? "outline" : "default"}
      >
        More about {tokenName}
      </Button>
    </div>
  </div>
);
