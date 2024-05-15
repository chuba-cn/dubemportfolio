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
    <Carousel className="w-full max-w-xs md:max-w-xl">
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
                    <div>
                      {job.duties.map((duty, index) => (
                        <div key={index} className="flex justify-start items-start gap-4 mb-2">
                          <Check className="text-primary inline" />
                          <p className="text-gray-700 inline max-w-[200px] md:max-w-sm">{duty}</p>
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
