import * as React from "react"

import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { experiences } from "@/constants";
import { Check } from "lucide-react";

export default function JobCarouselDesktop() {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full max-w-5xl xl:max-w-7xl"
    >
      <CarouselContent>
        {experiences.map((job, index) => (
          <CarouselItem key={index} className="lg:basis-1/3">
            <div className="p-1">
              <Card className="flex flex-col gap-4 items-start even:py-14 odd:py-8 shadow-lg">
                <div className="flex flex-col justify-between items-start">
                  <CardHeader>
                    <CardTitle className="text-gray-800 text-2xl">
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
                        <div key={index} className="flex justify-start items-start gap-4 mb-2 border-t border-gray-300 py-4">
                          <Check className="text-primary inline h-4 w-4" />
                          <p className="text-gray-700 inline max-w-[200px] xl:max-w-[250px]">{duty}</p>
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
    </Carousel>
  )
}