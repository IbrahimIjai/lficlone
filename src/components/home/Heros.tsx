import Image from "next/image";
import Link from "next/link";

export default function Heros() {
  return (
    <div className="h-screen ">
      <div className="w-full flex items-center flex-col">
        <p>
          <span> Ecosystem </span> Smartphone{" "}
        </p>
        <h2 className="heading"> LFi One </h2>
        <h3>
          {" "}
          A revolutionary smartphone that allows users to mint tokens and enter
          the crypto world seamlessly.{" "}
        </h3>
      </div>
    </div>
  );
}
