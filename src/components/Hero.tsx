'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import profile from "../../public/Dubem_Portfolio_Pic.jpg";
import { TextGenerateEffect } from './ui/text-generate-effect';

const word1 = `Hey, I'm Chuba 👋`;
const word2 = "I'm a cybersecurity/IT professional with a background in Computer Enginneering and Cybersecurity Analytics. I'm passionate about cybersecurity and I aim to leverage my skills and knowledge to tackle new challenges in the IT industry."


const Hero = () => {

  return (
    <section className="w-full mt-20 md:mt-0 py-8 md:pt-24 lg:pt-28 xl:pt-30" id="hero">
          <div className='flex flex-col lg:flex-row gap-12 lg:justify-between items-center '>
            <div className='flex flex-col gap-2'>
              <TextGenerateEffect words={word1} className='text-gray-700  text-2xl md:text-3xl tracking-tighter' />
              <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-4 text-wrap text-gray-700'>
                <span className='text-primary'>Cybersecurity&nbsp;</span>
                <br className='md:hidden lg:inline'/>
                Analyst/IT Professional
              </h1>
              <div className='md:max-w-lg'>
                <TextGenerateEffect words={word2} className='text-gray-700  text-xl md:text-2xl tracking-tighter mb-4 text-wrap' />
              </div>
              <div className='flex items-center gap-4'>
                <Link href="#contact">
                  <Button className='text-lg'>Get in Touch</Button>
                </Link>
                <Link href="#projects">
                  <Button className='bg-white text-black border-2 border-black text-lg hover:bg-gray-800 hover:text-white'>
                    Browse Projects
                  </Button>
                </Link>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <div className='border border-primary rounded-full h-[360px] w-[360px] md:h-[500px] md:w-[500px]'>
                <div className='p-10'>
                  <Image
                    src={profile}
                    width={550}
                    height={550}
                    alt='profile picture'
                    className='rounded-full aspect-square object-cover overflow-hidden'
                  />
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Hero