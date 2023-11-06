import React from "react";
import { navigationsLink } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/Navigation";
import Link from "next/link";

export default function DeskTopMenu() {
  return (
    <div className="hidden lg:inline-flex text-xl">
      <div className="flex items-center gap-8">
        {navigationsLink.map((linkItem) => {
          if (linkItem.items.length > 0)
            return (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-none hover:font-bold text-xl">
                      {linkItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-accent border-gray-400">
                      <div className="flex flex-col items-start py-4 gap-3 px-8">
                        {linkItem.items.map((item, i) => {
                          return (
                            <Link href={item.href} key={i}>
                              {item.title}
                            </Link>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            );
          return (
            <Link className="hover:font-bold hover:text-primary" key={linkItem.title} href={linkItem.url}>
              {linkItem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
