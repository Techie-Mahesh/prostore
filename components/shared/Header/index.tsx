import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavigationMenu } from "./types";

const Header = () => {
  const navigationMenus: NavigationMenu[] = [
    {
      id: "cart",
      variant: "ghost",
      icon: <ShoppingCart />,
      label: "Cart",
    },
    {
      id: "signIn",
      icon: <UserIcon />,

      label: "Sign In",
      variant: "default",
    },
  ];
  return (
    <header className=" border-b w-full">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={48}
              height={48}
              alt="Prostore"
            />
          </Link>
          <span className="hidden lg:block text-2xl ml-3">{APP_NAME}</span>
        </div>
        <div className="space-x-2">
          {navigationMenus.map((navItem) => (
            <Button key={navItem.id} asChild variant={navItem.variant}>
              <Link href={`/${navItem.id}`}>
                {navItem.icon}
                {navItem.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
