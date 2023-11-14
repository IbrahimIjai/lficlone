import React, { useEffect, useRef } from "react";
import { SVGProps } from "react";
import MobileMenu from "./MobileMenu";
import DeskTopMenu from "./DeskTopMenu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const measureHeight = () => {
    if (navRef.current) {
      const navHeight = navRef.current.offsetHeight;
      console.log("Nav height:", navHeight, "pixels");
    }
  };

  // Use useEffect to trigger the measurement after the component is rendered
  useEffect(() => {
    measureHeight();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex z-50 font-semibold bg-background text-white/80 items-center justify-between px-4 lg:px-12 py-4 fixed top-0 inset-x-0 max-w-[540px] md:max-w-[720px] m-auto lg:max-w-full"
    >
      <Logo2 />
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
    </nav>
  );
}

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={93}
    height={35}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m38.057 22.177-.035-.017c-.375-.196-.82 0-.96.402a3.443 3.443 0 0 1-1.686 1.943L21.669 31.68a3.494 3.494 0 0 1-3.253 0L4.709 24.505a3.443 3.443 0 0 1-1.686-1.943c-.137-.399-.586-.598-.96-.402l-.036.017c-1.37.718-1.37 2.674 0 3.392l17.121 8.964c.558.29 1.224.29 1.781 0l17.125-8.964c1.37-.718 1.37-2.674 0-3.392h.003Z"
    />
    <path
      fill="#fff"
      d="m38.057 15.748-.035-.018c-.375-.196-.82 0-.96.402a3.443 3.443 0 0 1-1.686 1.943l-13.707 7.176a3.495 3.495 0 0 1-3.253 0l-13.71-7.176a3.443 3.443 0 0 1-1.687-1.942c-.137-.4-.585-.599-.96-.403l-.035.018c-1.371.717-1.371 2.674 0 3.391l17.12 8.964c.558.29 1.224.29 1.782 0L38.05 19.14c1.371-.717 1.371-2.674 0-3.391h.007Z"
    />
    <path
      fill="#fff"
      d="m2.027 12.575 1.202.627 1.918 1.004 3.705 1.936 2.356 1.236 8.353 4.368c.302.157.663.157.965 0l2.629-1.376c1.37-.717 1.37-2.674 0-3.392l-7.951-4.161-.473-.249c-1.318-.693-1.367-2.53-.147-3.304.045-.031.098-.06.147-.087l9.914-5.188c.74-.388.74-1.445 0-1.83L20.931.223a1.928 1.928 0 0 0-1.78 0L2.026 9.183c-1.371.715-1.371 2.675 0 3.392Z"
    />
    <path
      fill="#fff"
      d="M22.254 9.18a1.89 1.89 0 0 0-1.023 1.768c.024.641.364 1.268 1.013 1.618.003 0 .007.003.01.007l7.008 3.668s.007 0 .01.003c.55.29 1.21.29 1.764 0 0 0 .007 0 .01-.003l.186-.098 3.705-1.943 3.12-1.627.01-.007c1.361-.721 1.358-2.671-.01-3.385l-7.01-3.672c-.025-.01-.046-.024-.074-.035-.01-.007-.021-.01-.032-.017a1.684 1.684 0 0 0-1.57 0s-.025.01-.032.017c-.025.01-.05.025-.074.035l-7.007 3.672h-.004Z"
    />
    <path
      fill="#F1F4F8"
      d="M54.084 30.76V3.035h4.206V27.08h10.274v3.68h-14.48ZM71.413 30.76V3.035h15.125v3.6h-10.92v8.608h9.547v3.638h-9.547v11.88h-4.205ZM88.74 6.637V3h3.802v3.637h-3.801Zm0 24.124V9.5h3.802v21.26h-3.801Z"
    />
  </svg>
);

const Logo2 = () => (
  <Image src="/astra logo.png" width={30} height={30} alt="Astra Vault Logo" />
);
