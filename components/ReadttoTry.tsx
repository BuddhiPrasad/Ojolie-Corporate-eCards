import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ReadttoTry = () => {
  return (
    <section className="container mx-auto py-12 md:py-24 px-4">
      <div className="mx-auto max-w-[600px] space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to try it out?</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Create a free account and start sending cards right away! Use them
          with your team to get feedback before sending.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <Input
            className="w-full sm:max-w-xs"
            placeholder="Enter your email"
            type="email"
          />
          <Button className="w-full sm:w-auto">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default ReadttoTry;
