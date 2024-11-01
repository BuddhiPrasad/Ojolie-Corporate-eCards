import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import hero1 from "@/assets/how-it-work.avif";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Text content */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Personalize – Surprise – Stay Connected.
          </h1>
          <p className="max-w-full md:max-w-[600px] text-gray-500 text-sm md:text-base lg:text-lg dark:text-gray-400">
            Strengthen relationships and customer loyalty with unique video
            stories that are personalized and easy to manage.
          </p>
          <Button className="w-fit mt-4 md:mt-0" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {/* Image content */}
        <div className="flex justify-center lg:justify-end">
          <Image
            alt="Hero illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            src={hero1}
            width={600}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
