import MobileMenu from "./MobileMenu";
import DeskTopMenu from "./DeskTopMenu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-[4] font-semibold bg-background text-white/80 px-4 lg:px-12 py-4 fixed top-0 inset-x-0">
      <div className="flex max-w-[540px] md:max-w-[720px] m-auto lg:max-w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3 lg:gap-6">
          <DeskTopMenu />
          <Link
            href="google.com"
            className="bg-primary rounded-full text-[#070a0b] p-2 px-4 text-base font-medium"
          >
            Go To App
          </Link>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export const Logo = () => (
  <Image src="/astra logo.png" width={30} height={30} alt="Astra Vault Logo" />
);
