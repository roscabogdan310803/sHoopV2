"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const{} = useShoppingCart

export default function Navbar(){
    const pathname = usePathname()
    const { handleCartClick } = useShoppingCart();
  return(
   <header className="bg-blk">
      <div className="flex items-center justify-between mx-auto maw-w-2xl px-4 sm:px-6 lg:max-w-7xl">
      <Link href="/">
        <h1 className="text-2xl md:text-4xl font-bold text-porto1 font-yatara">sH<span className="text-brn">oo</span>p</h1>
      </Link>
      <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-porto2"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-brn transition duration-100 hover:text-porto2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x  ">
          <Button  onClick={() => handleCartClick()}  className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-brn hover:bg-porto2">
            <ShoppingBag />
            <span className="hidden text-m font-semibold text-white sm:block">
              Cart
            </span>
          </Button>
        </div>

      </div>
   </header>
  )
}