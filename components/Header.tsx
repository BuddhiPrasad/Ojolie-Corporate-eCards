"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import React from "react";

import logo from "@/assets/logo-o.png";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Business Dropdown */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Ojolie" width={100} height={32} priority />
            </Link>
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hidden md:block">
                  BUSINESS
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Corporate</DropdownMenuItem>
                  <DropdownMenuItem>Enterprise</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* Search, Login, and Get Started Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link href="/login" className="hidden text-sm font-medium md:block">
              LOG IN
            </Link>
            <Button className="hidden bg-[#ff7f6a] text-white hover:bg-[#ff7f6a]/90 md:inline-flex">
              GET STARTED
            </Button>
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6">
                  <Link
                    href="/business-ecards"
                    className="text-lg font-semibold"
                  >
                    Business Ecards
                  </Link>
                  <Link href="/how-it-works" className="text-lg font-semibold">
                    How It Works
                  </Link>
                  <Link href="/pricing" className="text-lg font-semibold">
                    Pricing
                  </Link>
                  <Link href="/about-us" className="text-lg font-semibold">
                    About Us
                  </Link>
                  <Link href="/contact-us" className="text-lg font-semibold">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block -mb-px">
          <ul className="flex gap-8 justify-center">
            {/* Business Ecards with Dropdown */}
            <li className="hidden">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 border-b-2 pb-4 text-sm font-medium transition-colors ${
                    pathname === "/business-ecards"
                      ? "border-[#ff7f6a] text-[#ff7f6a]"
                      : "border-transparent hover:border-gray-200"
                  }`}
                >
                  Business Ecards
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[400px]">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">HOLIDAYS</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/christmas"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            Christmas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/new-year"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            New Year
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/seasons-greetings"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            Season&apos;s Greetings
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/thanksgiving"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            Thanksgiving
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">OCCASIONS</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/birthdays"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            Birthdays
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 space-y-2 border-t pt-4">
                      <Link
                        href="/all-ecards"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        All Ecards
                      </Link>
                      <Link
                        href="/new-ecards"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        New Ecards
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            {/* Other Navigation Links */}
            <li>
              <Link
                href="/how-it-works"
                className={`block border-b-2 pb-4 text-sm font-medium transition-colors ${
                  pathname === "/how-it-works"
                    ? "border-[#ff7f6a] text-[#ff7f6a]"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`block border-b-2 pb-4 text-sm font-medium transition-colors ${
                  pathname === "/pricing"
                    ? "border-[#ff7f6a] text-[#ff7f6a]"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`block border-b-2 pb-4 text-sm font-medium transition-colors ${
                  pathname === "/about-us"
                    ? "border-[#ff7f6a] text-[#ff7f6a]"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`block border-b-2 pb-4 text-sm font-medium transition-colors ${
                  pathname === "/contact-us"
                    ? "border-[#ff7f6a] text-[#ff7f6a]"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
