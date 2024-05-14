'use client'

import { Button } from "./ui/button";
import { BriefcaseBusiness, Computer, Home, Mail, MenuIcon, SwordsIcon } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";  

const MobileNav = () => {
  return (
    <section className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="secondary">
            <MenuIcon className="h-6 w-6 hover:text-primary" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white w-[300px]">
          <div className="flex flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-10 text-gray-700">
                <SheetClose asChild>
                  <Link
                    href="#"
                    className="flex gap-5 items-center p-4 w-full max-w-60"
                  >
                    <Home className="h-6 w-6 text-primary" />
                    <p className="font-semibold text-2xl hover:text-primary">
                      Home
                    </p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#projects"
                    className="flex gap-5 items-center p-4 w-full max-w-60"
                  >
                    <SwordsIcon className="h-6 w-6 text-primary" />
                    <p className="font-semibold text-2xl hover:text-primary">
                      Projects
                    </p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#skills"
                    className="flex gap-5 items-center p-4 w-full max-w-60"
                  >
                    <Computer className="h-6 w-6 text-primary" />
                    <p className="font-semibold text-2xl hover:text-primary">
                      Skills
                    </p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#experiences"
                    className="flex gap-5 items-center p-4 w-full max-w-60"
                  >
                    <BriefcaseBusiness className="h-6 w-6 text-primary" />
                    <p className="font-semibold text-2xl hover:text-primary">
                      Experiences
                    </p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className="flex gap-5 items-center p-4 w-full max-w-60"
                  >
                    <Mail className="h-6 w-6 text-primary" />
                    <p className="font-semibold text-2xl hover:text-primary">
                      Contact
                    </p>
                  </Link>
                </SheetClose>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav