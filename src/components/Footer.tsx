import { ArrowUpRight, Copyright, MailIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-20 md:mt-40 bg-primary/90 px-8 md:px-10 py-8" id="contact">
      <Link href='mailto:chidubem.chuba@gmail.com' target="_blank">
        <div className="border-b-4 border-gray-200 flex flex-row justify-between items-center py-3">
          <p className="md:text-2xl md:hover:text-3xl md:hover:text-gray-200 transition-all text-gray-300 font-bold uppercase ">
            Contact me
          </p>
          <ArrowUpRight className="md:h-10 md:w-10 text-gray-300 inline"/>
        </div>
      </Link>

      <Link href="https://www.linkedin.com/in/chidubem-chuba-nwene-2b6b2a1bb/" target="_blank">
        <div className="border-b-4 border-gray-200 flex flex-row justify-between items-center py-3">
          <p className="md:text-2xl md:hover:text-3xl md:hover:text-gray-200 transition-all text-gray-300  font-bold uppercase">Linkedin</p>
          <ArrowUpRight className="md:h-10 md:w-10 text-gray-200 inline"/>
        </div>
      </Link>

      <Link href="tel:+1(416)939-3478" target="_blank">
        <div className="border-b-4 border-gray-200 flex flex-row justify-between items-center py-3">
          <p className="md:text-2xl md:hover:text-3xl md:hover:text-gray-200 transition-all text-gray-300 font-bold uppercase">+1(416)939-347</p>
          <ArrowUpRight className="md:h-10 md:w-10 text-gray-200 inline"/>
        </div>
      </Link>

      <div className="flex justify-center items-center pt-6">
        <div>
          <Copyright className="inline text-gray-200"/> {' '}
          <p className="inline text-gray-200">2024. All rights reserved.</p>
        </div>
      </div>
        
    </footer>
  )
}

export default Footer