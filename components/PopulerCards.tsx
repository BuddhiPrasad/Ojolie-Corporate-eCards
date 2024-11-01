import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const PopulerCards = () => {
  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl md:text-3xl font-bold">
          Popular Cards
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  alt={`Card preview ${i + 1}`}
                  className="aspect-[4/3] object-cover"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                  layout="responsive"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopulerCards;
