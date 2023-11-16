import React from "react";
import { Logo } from "./Navbar";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { footerLinks } from "@/config/site";
import { XLogo, TelegramLogo } from "@/assets/icons";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-center lg:justify-between gap-12">
      <div className="flex items-center w-full justify-between lg:items-start md:flex-row pb-24 pt-60 px-2 flex-col gap-6 sm:max-w-lg md:max-w-3xl m-auto">
        <div className="flex items-center">
          <Logo />
        </div>
        {footerLinks.map((item, i) => (
          <div className="flex flex-col items-center lg:items-start" key={i}>
            <h1 className="font-medium text-white text-xl mb-4">
              {item.title}
            </h1>
            <ul className="flex flex-col gap-3 items-center lg:items-start">
              {item.items.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="hover:text-primary text-sm">
                    {link.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="text-center my-4 lg:my-0">
          <div className="mb-6">
            <h1 className="font-semibold text-xl text-white">Contact Us</h1>
            <Link href="/support">Help & Support</Link>
          </div>
          <div className="mt-12">
            <h1 className="font-semibold my-4 text-xl text-white">
              Social Accounts
            </h1>
            <div className="flex items-center gap-3">
              <Link href="twitter.com">
                <XLogo />
              </Link>
              <Link href="facebook.com">
                <Facebook />
              </Link>
              <Link href="instagram.com">
                <Instagram />
              </Link>
              <Link href="linkedln.com">
                <Linkedin />
              </Link>
              <Link href="youtube.com">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 text-center pt-1 pb-4 w-full sm:max-w-lg md:max-w-3xl m-auto">
        <div className="flex flex-col lg:w-full lg:justify-between gap-3 lg:flex-row items-center">
          <p className="text-sm">© 2023 LFi | All Rights Reserved</p>
          <div className="flex gap-6 items-center">
            {T_and_Cs.map(({ link, text }, i) => (
              <Link key={i} className="text-xs hover:text-primary" href={link}>
                {text}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs">
          Actual product may slightly vary in design, color and size. Please
          read the description of the product for complete understanding of its
          specifications.
        </p>
      </div>
    </div>
  );
}
const T_and_Cs = [
  { link: "/terms", text: "Terms" },
  { link: "/terms", text: "Privacy and Cookies" },
  { link: "/terms", text: "Disclaimer" },
];
