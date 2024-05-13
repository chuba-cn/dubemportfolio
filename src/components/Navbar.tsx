import Link from "next/link";
import { ShieldIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      {/* Desktop Navigation */}
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 font-semibold hover:text-purple-900" href="#">
            <ShieldIcon className="h-6 w-6" />
            <span>Chuba</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              About
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Skills
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Experience
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </header>
  )
}

export default Navbar