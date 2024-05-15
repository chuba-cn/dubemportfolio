import * as React from "react"

import { Card, CardContent, CardTitle,CardDescription, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { experiences } from "@/constants"
import { Check } from "lucide-react";

export default function JobCarousel() {
  return (
    <Carousel className="w-full max-w-sm lg:max-w-xl">
      <CarouselContent>
        {experiences.map((job, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="flex flex-col gap-4 items-start">
                <div className="flex flex-col justify-between items-start">
                  <CardHeader>
                    <CardTitle className="text-gray-800 text-xl lg:text-2xl">
                      {job.role}{" "}
                      <span className="text-primary">@ {job.company}</span>
                    </CardTitle>

                    <CardDescription className="text-gray-700">
                      {job.duration}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-between items-start">
                    <div className="flex flex-col justify-start items-center gap-4">
                      {job.duties.map((duty, index) => (
                        <div key={index} >
                          <Check className="text-primary inline" />
                          <p className="text-gray-700 inline">{duty}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary" />
      <CarouselNext className="text-primary" />
    </Carousel>
  );
}
