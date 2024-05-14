import Link from "next/link";
import { ShieldIcon } from "lucide-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-sm backdrop-blur-sm flex justify-between items-center">
      {/* Desktop Navigation */}
        <div className="px-8">
          <Link className="flex items-center gap-2 font-semibold hover:text-primary" href="#">
            <ShieldIcon className="h-6 w-6 text-gray-700" />
            <span className="font-semibold text-2xl text-gray-700">Chuba</span>
          </Link>
        </div>
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-2xl font-semibold transition-colors text-gray-700 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-2xl font-semibold transition-colors text-gray-700 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-2xl font-semibold transition-colors text-gray-700 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#experiences"
            >
              Experience
            </Link>
            <Link
              className="inline-flex items-center rounded-md px-3 py-2 text-2xl font-semibold transition-colors text-gray-700 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
        <MobileNav />
      </header>
  )
}

export default Navbar