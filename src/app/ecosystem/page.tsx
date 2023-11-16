import { Button } from "@/components/ui/Button";
import React from "react";
import MisionandVision from "@/components/home/MisionandVision";
export default function Ecosystem() {
  return (
    <>
      <div className="py-[8rem] lg:p-[10rem] w-screen bg-[url(/img/about-banner.png)] bg-no-repeat bg-cover bg-[0] lg:bg-[50%] px-[4rem]">
        <div className="flex flex-col items-center lg:items-start gap-12  sm:max-w-sm md:max-w-md lg:max-w-full m-auto">
          <h1 className="heading font-bold">LFi Ecosystem</h1>
          <p className="text-center lg:text-start text-base lg:text-lg lg:w-2/5">
            LFi is an innovative decentralized platform that aims to democratize
            access to opportunities in the crypto world, ensuring everyone has
            the chance to participate and benefit.
          </p>
          <div className="flex gap-4 text-3xl">
            <Button className="text-sm px-6 rounded-3xl">Learn More</Button>
            <Button className="text-sm px-6 rounded-3xl" variant="outline">
              White paper
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-[5rem] flex items-center justify-center max-w-[540px] md:max-w-[720px] m-auto lg:max-w-full my-16">
        <p className="text-2xl lg:text-4xl text-center text-gray-200 ">
          LFi aims to empower individuals by offering accessible financial
          opportunities through a decentralized, transparent, and secure
          platform driven by a DAO community.
        </p>
      </div>

      <div className="flex flex-col items-center mx-6 gap-12 my-26">
        <h1 className="heading my-16"> Manifesto </h1>

        <div className="flex flex-col gap-7 lg:gap-14 lg:mx-7">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:justify-between items-center lg:mb-10 max-w-[480px] md:max-w-[640px] m-auto lg:max-w-full">
            <div className="lg:w-1/2">
              <h2 className="styleText text-6xl lg:text-[120px] -mb-8 lg:-mb-10">
                Inclusive
              </h2>
              <h4 className=" text-white text-4xl">Our System</h4>
              <h6 className="my-5 lg:w-3/5 ">
                The time has come to bring a more inclusive financial system to
                the world, where the control and ownership of assets lie with
                the people.
              </h6>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-white text-3xl lg:text-5xl my-6 lg:my-12">
                Everyone should have equal opportunities for wealth generation
                and financial independence.
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-8 lg:justify-between items-center lg:flex-row-reverse max-w-[480px] md:max-w-[640px] m-auto lg:max-w-full">
            <div className="lg:w-1/2">
              <h2 className="styleText text-6xl lg:text-[120px] -mb-8 lg:-mb-10">
                Public
              </h2>
              <h4 className=" text-white text-4xl">Transparency</h4>
              <h6 className="my-5 lg:w-3/5 ">
                {" "}
                Where transactions are publicly verifiable, must prevail and the
                security and safety of user data are the top priority.
              </h6>
            </div>
            <div className="lg:w-1/2">
              <p className=" text-white text-3xl my-6 lg:my-12 lg:text-5xl">
                We believe in a consensus-driven system shaped by the DAO.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MisionandVision />
    </>
  );
}
