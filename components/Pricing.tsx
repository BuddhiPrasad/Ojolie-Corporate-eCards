import Image from "next/image";
import React from "react";

import pricing from "@/assets/pricing.png";

const Pricing = () => {
  return (
    <section className="container mx-auto py-12 md:py-24 px-4">
      <div className="mx-auto max-w-[900px] space-y-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold">Pricing</h2>
        <div className="overflow-hidden rounded-xl border bg-background">
          <Image
            alt="Product demo"
            className="w-full h-auto object-cover"
            height={500}
            src={pricing}
            width={900}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
