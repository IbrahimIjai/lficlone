import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheets";
import { Button } from "../ui/Button";
import { ScrollArea } from "../ui/ScrollArea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
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
        <SheetContent
          side="top"
          className="pl-1 pr-0 h-1/2"
          style={{ border: "none" }}
        >
          <ScrollArea className="my-4 pb-10 pl-6">
            <div className="pl-1 pr-7 flex flex-col gap-4 pt-6 items-start font-semibold text-white">
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
                        <AccordionTrigger className="text-sm">
                          {linkItem.title}
                        </AccordionTrigger>
                        <AccordionContent className="overflow-visible">
                          <div className="flex flex-col space-y-2 p-4 rounded mt-4 bg-[#141414]">
                            {linkItem.items?.map((subItem, index) =>
                              subItem.href ? (
                                <MobileLink
                                  key={index}
                                  href={String(subItem.href)}
                                  pathname={pathname}
                                  setIsOpen={setIsOpen}
                                  disabled={false}
                                  className="text-[#919aa7] text-sm hover:text-foreground transition-colors"
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
                              )
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
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
  className = "",
}: MobileLinkProps) {
  return (
    <>
      <Link
        href={href}
        className={cn(
          "text-[#f1f4f8] transition-colors hover:text-primary",
          pathname === href && "text-foreground",
          disabled && "pointer-events-none opacity-60",
          className
        )}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    </>
  );
}
