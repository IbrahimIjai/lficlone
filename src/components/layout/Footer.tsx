import React from "react";
import { Logo } from "./Navbar";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { footerLinks } from "@/config/site";
import { XLogo, TelegramLogo } from "@/assets/icons";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-center lg:justify-between gap-12 px-12 py-8">
      <div className="flex items-center w-full justify-between lg:items-start lg:flex-row  flex-col gap-6">
        <div className="flex items-center">
          <Logo />
        </div>
        {footerLinks.map((item, i) => {
          return (
            <div className="flex flex-col items-center lg:items-start" key={i}>
              <h1 className="font-medium text-white text-xl mb-4">
                {item.title}
              </h1>
              <ul className="flex flex-col  gap-3 items-center lg:items-start">
                {item.items.map((link, j) => {
                  return (
                    <li key={j}>
                      <Link href={link.href}>{link.item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="text-center my-4 lg:my-0">
          <div className="mb-6">
            <h1 className="font-semibold text-xl text-white">Contact Us</h1>
            <Link href="/support">Help and Support</Link>
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

      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col lg:w-full lg:justify-between gap-3 lg:flex-row items-center">
          <p>© 2023 LFi | All Rights Reserved</p>
          <div className="flex gap-6 items-center">
            <Link href="/terms">Terms</Link>
            <Link href="/terms">Privacy & Cookies</Link>
            <Link href="/terms">Disclaimer</Link>
          </div>
        </div>
        <p>
          Actual product may slightly vary in design, color and size. Please
          read the description of the product for complete understanding of its
          specifications.
        </p>
      </div>
    </div>
  );
}
