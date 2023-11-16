import React from "react";
import { navigationsLink } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/Navigation";
import Link from "next/link";

export default function DeskTopMenu() {
  return (
    <div className="hidden lg:inline-flex text-base font-normal">
      <div className="flex items-center gap-8">
        {navigationsLink.map((linkItem) => {
          if (linkItem.items.length > 0)
            return (
              <NavigationMenu key={linkItem.title}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white">
                      {linkItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-accent border-gray-400">
                      <div className="flex flex-col items-start gap-3 py-2">
                        {linkItem.items.map((item, i) => (
                          <Link
                            href={item.href}
                            key={i}
                            className="hover:bg-primary w-full whitespace-nowrap text-sm px-4 py-1 text-[#919aa7]"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            );
          return (
            <Link
              className="hover:text-primary text-white"
              key={linkItem.title}
              href={linkItem.url}
            >
              {linkItem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
