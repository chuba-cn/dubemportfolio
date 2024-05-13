'use client'

import Image from 'next/image';
import React from 'react';
import { TypewriterEffect } from './ui/typewriter-effect';

const Hero = () => {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Chidubem",
      className: "text-blue-500"
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="hero">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <TypewriterEffect words={words}/>
                </h1>
                <p className="text-gray-500 md:text-xl ">
                  Cyber Security Analyst
                </p>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Experienced cyber security analyst with a proven track record of
                protecting organizations from cyber threats. Skilled in
                vulnerability assessment, incident response, and security
                automation.
              </p>
            </div>
            <Image
              alt="John Doe"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-full"
              height="550"
              src="/placeholder.png"
              width="550"
            />
          </div>
        </div>
      </section>
  )
}

export default Hero