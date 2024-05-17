import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-20 md:mt-16 bg-primary rounded-tr-lg rounded-tl-lg px-4 md:px-8" id="contact">
      <Link href='mailto:chidubem.chuba@gmail.com' target="_blank">
        <div className="border-b-4 border-gray-200 flex flex-row justify-between items-center py-7">
          <p className="md:text-4xl md:hover:text-5xl md:hover:text-gray-200 transition-all text-gray-300 font-bold uppercase ">
            Contact me
          </p>
          <ArrowUpRight className="md:h-16 md:w-16 text-gray-300 inline"/>
        </div>
      </Link>

      <Link href="https://www.linkedin.com/in/chidubem-chuba-nwene-2b6b2a1bb/" target="_blank">
        <div className="border-b-4 border-gray-200 flex flex-row justify-between items-center py-7">
          <p className="md:text-4xl md:hover:text-5xl md:hover:text-gray-200 transition-all text-gray-300  font-bold uppercase">Linkedin</p>
          <ArrowUpRight className="md:h-16 md:w-16 text-gray-200 inline"/>
        </div>
      </Link>

      <Link href="tel:+1(416)939-3478" target="_blank">
        <div className="border-gray flex flex-row justify-between items-center py-7">
          <p className="md:text-4xl md:hover:text-5xl md:hover:text-gray-200 transition-all text-gray-300 font-bold uppercase">+1(416)939-347</p>
          <ArrowUpRight className="md:h-16 md:w-16 text-gray-200 inline"/>
        </div>
      </Link>
        
    </footer>
  )
}

export default Footer