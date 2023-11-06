import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link2Icon, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheets";
import { Button } from "../ui/Button";
import { ScrollArea } from "../ui/ScrollArea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
// import { siteConfig } from "@/config/site";
import { navigationsLink } from "@/config/site";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
   <div className="lg:hidden">
     <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="pl-1 pr-0 h-1/2">
        <ScrollArea className="my-4  pb-10 pl-6 ">
          <div className="pl-1 pr-7 flex flex-col items-start">
            {navigationsLink.map((linkItem) => {
              if (linkItem.items.length > 0)
                return (
                  <Accordion
                    type="single"
                    key={linkItem.title}
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value={linkItem.title}>
                      <AccordionTrigger className="text-sm capitalize">
                        {linkItem.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 ml-3">
                          {linkItem.items?.map((subItem, index) =>
                            subItem.href ? (
                              <MobileLink
                                key={index}
                                href={String(subItem.href)}
                                pathname={pathname}
                                setIsOpen={setIsOpen}
                                disabled={false}
                              >
                                {subItem.title}
                              </MobileLink>
                            ) : (
                              <div
                                key={index}
                                className="text-foreground/70 transition-colors"
                              >
                                {subItem.title}
                              </div>
                            ),
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              return (
                <div key={linkItem.title}>
                  <MobileLink
                    setIsOpen={setIsOpen}
                    disabled={false}
                    href={linkItem.url}
                  >
                    {linkItem.title}
                  </MobileLink>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
   </div>
  );
}

interface MobileLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  pathname?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <>
      <Link
        href={href}
        className={cn(
          "text-foreground/70 transition-colors hover:text-foreground",
          pathname === href && "text-foreground",
          disabled && "pointer-events-none opacity-60",
        )}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    </>
  );
}
