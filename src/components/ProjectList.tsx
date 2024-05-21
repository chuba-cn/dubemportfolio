"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/constants";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectList() {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
      {projects.map((item) => (
        <div
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={item.title}
        >
          <PinContainer title="Visit" href={item.url}>
            <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[35vh] lg:h-[45vh] mb-5">
              
            <h1 className="font-bold lg:text-2xl md:text-xl text-base mb-2">
              {item.title}
            </h1>
            <p
              className="lg:text-lg lg:font-normal font-light text-sm line-clamp-6 text-gray-700"
              style={{
                margin: "1vh 0",
              }}
            >
              {item.description}
            </p>
            </div>

            <div className="flex items-center justify-between mt-1 mb-2">
              <div className="flex justify-center items-center gap-1">
                <Link
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center gap-1 text-primary hover:text-blue-400"
                >
                  <p className="lg:text-xl md:text-xs text-sm">
                    View project details
                  </p>
                  <MoveUpRight className="h-4 w-4"/>
                </Link>
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
}