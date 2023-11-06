import Link from "next/link";
export default function Heros() {
  return (
    <div className="h-screen bg-[url(/herologo.png)] flex-col bg-no-repeat w-screen bg-center bg-75% lg:bg-25% items-center flex justify-center">
      <div className="px-4 lg:w-[50%] lg:px-12 text-center flex flex-col items-center gap-8">
        <h1 className="font-bold text-3xl lg:text-6xl ">
          Build Your Independence
        </h1>
        <h3 className="text-gray-500 text-base lg:text-lg">
          LFi is a decentralized platform designed to provide equal
          opportunities for wealth generation and financial independence through
          crypto.
        </h3>
        <Link
          href="/"
          className="bg-primary rounded-full px-4 py-2 text-gray-900"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
