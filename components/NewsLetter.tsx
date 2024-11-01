import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsLetter = () => {
  return (
    <section className="border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="mx-auto max-w-[600px] space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            quibusdam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <Input
              className="w-full sm:max-w-xs"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="w-full sm:w-auto">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
