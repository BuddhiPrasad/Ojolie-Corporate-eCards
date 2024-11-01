import { Heart, ImageIcon, Palette } from "lucide-react";
import React from "react";

const ArtisCreated = () => {
  return (
    <section className="container mx-auto py-12 md:py-24 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
          Artist Created
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
          The worlds most unique video cards by Ojolie! Designed by artists and
          used by some of the worlds most prominent brands.
        </p>
      </div>
      <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl items-center py-12 lg:gap-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <ImageIcon className="h-12 w-12" />
          <h3 className="font-bold text-lg">Try before you buy</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Easily design multiple options, share with stakeholders, and pick
            from 3 weeks before you pay.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <Palette className="h-12 w-12" />
          <h3 className="font-bold text-lg">Expert design service</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Personalized service and customization is possible, supporting your
            own brand guidelines and requirements.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <Heart className="h-12 w-12" />
          <h3 className="font-bold text-lg">Maximum trust</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            You choose how you want your card delivered and we help you deliver
            it on time with maximum trust and reputation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtisCreated;
