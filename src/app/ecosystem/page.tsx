import { Button } from "@/components/ui/Button";
import React from "react";
import MisionandVision from "@/components/home/MisionandVision";
export default function Ecosystem() {
  return (
    <div className="">
      <div className="pt-[8rem] lg:p-[10rem] h-[50vh] lg:h-screen w-screen  bg-[url(/img/about-banner.png)] bg-no-repeat bg-150% px-[4rem]">
        <div className="flex flex-col items-center lg:items-start gap-12">
          <h1 className="heading font-bold">LFi Ecosystem</h1>
          <p className="text-center lg:text-start text-xl lg:text-2xl lg:w-2/5">
            LFi is a decentralized platform designed to provide equal
            opportunities for wealth generation and financial independence.
          </p>
          <div className="flex gap-4 text-3xl">
            <Button className="text-2xl px-6 py-6">Learn More</Button>
            <Button className="text-2xl px-6 py-6" variant="outline">
              White paper
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 h-[50vh] lg:px-[5rem] flex items-center justify-center">
        <p className="text-2xl lg:text-4xl text-center text-gray-200 ">
          LFi aims to empower individuals by offering accessible financial
          opportunities through a decentralized, transparent, and secure
          platform driven by a DAO community.
        </p>
      </div>

      <div className="flex flex-col items-center mx-6 gap-12 my-26">
        <h1 className="heading my-16"> Manifesto </h1>

        <div className="flex flex-col gap-14 lg:mx-7">
          <div className="flex flex-col lg:flex-row gap-8 lg:justify-between items-center">
            <div className="lg:flex-1">
              <h1 className=" text-white text-4xl">Financial system</h1>
              <p className="my-5 lg:w-3/5 ">
                {" "}
                The time has come to bring a more inclusive financial system to
                the world, where the control and ownership of assets lie with
                the people.
              </p>
            </div>
            <div className="lg:flex-1">
              <p className="text-white text-4xl lg:text-5xl my-12">
                Everyone should have equal opportunities for wealth generation
                and financial independence.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:justify-between items-center lg:flex-row-reverse">
            <div className="lg:flex-1">
              <h1 className=" text-white text-4xl">Transparency</h1>
              <p className="my-5 lg:w-3/5 ">
                {" "}
                Where transactions are publicly verifiable, must prevail and the
                security and safety of user data are the top priority.
              </p>
            </div>
            <div className="lg:flex-1">
              <p className=" text-white text-4xl  my-12 lg:text-5xl">
                We believe in a consensus-driven financial system shaped by the
                DAO.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MisionandVision />
    </div>
  );
}
