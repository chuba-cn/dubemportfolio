"use client";

import { projects } from "@/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TracingBeam } from "./ui/tracing-beam";

export default function ProjectList() {
  return (
    <>
      <TracingBeam className="px-6 hidden md:block">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {projects.map((item) => (
            <div key={item.title} className="mb-10">
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-700 font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-gray-700">
                  {item.description}
                </CardContent>
                <CardContent>
                  <div className="flex justify-start items-center gap-1">
                    <Link
                      href={item.url}
                      target="_blank"
                      className="flex items-center justify-center gap-1 text-blue-500 hover:text-primary"
                    >
                      <p className="lg:text-xl text-lg">View project details</p>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </TracingBeam>

      <div className="max-w-2xl mx-auto antialiased pt-4 relative md:hidden">
          {projects.map((item) => (
            <div key={item.title} className="mb-10">
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-700 font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-gray-700">
                  {item.description}
                </CardContent>
                <CardContent>
                  <div className="flex justify-start items-center gap-1">
                    <Link
                      href={item.url}
                      target="_blank"
                      className="flex items-center justify-center gap-1 text-blue-500 hover:text-primary"
                    >
                      <p className="lg:text-xl text-lg">View project details</p>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
    </>
  );
}