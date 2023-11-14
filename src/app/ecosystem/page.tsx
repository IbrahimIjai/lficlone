import { Button } from "@/components/ui/Button";
import React from "react";

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

      <div>
        <h1 className="heading"> Manifesto </h1>
        <div>
          <div>
            <div>
              <h1 className="heading">Financial system</h1>
              <p>
                {" "}
                The time has come to bring a more inclusive financial system to
                the world, where the control and ownership of assets lie with
                the people.
              </p>
            </div>
            <p>
              {" "}
              Everyone should have equal opportunities for wealth generation and
              financial independence.{" "}
            </p>
          </div>

          <div>
            <p>
              We believe in a consensus-driven financial system shaped by the
              DAO.
            </p>
            <div>
              <h1 className="heading">Transparency</h1>
              <p>
                {" "}
                Where transactions are publicly verifiable, must prevail and the
                security and safety of user data are the top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
