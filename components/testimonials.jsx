"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );  

  useEffect(() => {
    const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials-data');
      const data = await response.json();
      setTestimonials(data);
    } catch(e) {
      console.error("Error Fetching Testimonials data", e);
    } finally {
      setLoading(false);
    }
  }
  fetchTestimonials();
}, []);

if (loading) {
  return <div>Loading Testimonials</div>
}

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="w-full max-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4"> 
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage 
                    src={testimonial.image}
                    alt={testimonial.name} />
                    <AvatarFallback>
                    {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Testimonials;
