"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base hover:opacity-70">
            Member Benefits
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  className="border-r border-gray-400/20"
                  asChild
                >
                  <a
                    className="flex h-full w-full select-none flex-col rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="relative flex-1 rounded-lg overflow-hidden">
                      <Image
                        src="/phone_image.webp"
                        fill={true}
                        alt="image de telephone"
                        className="abolute object-cover"
                      />
                    </div>
                    <p className="text-base mt-4">Big News</p>
                    <p className="text-sm">
                      Check out the newly launched Fruitful Cash & Card.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Guidance">
                Professional 1:1 advice and support.
              </ListItem>
              <ListItem href="/" title="Save & Spend">
                Save more, spend responsibly, score rewards.
              </ListItem>
              <ListItem href="/" title="Invest">
                Smarter investing set up for you.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <Link href="/" passHref className="mr-4 hover:opacity-70">
          Pricing
        </Link>

        <Link href="/" passHref className="hover:opacity-70">
          Testimonials
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-[2px] rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
