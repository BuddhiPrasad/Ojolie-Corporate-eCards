import Image from "next/image";
import React from "react";

import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import FrederikkeTu from "@/assets/frederikke tu.png";
import TimothyTu from "@/assets/Timothy Tu.png";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#1a2b3b] py-24">
          <Image
            src={about1}
            alt="Circular cityscape illustration"
            className="mx-auto"
            width={800}
            height={400}
            priority
          />
        </section>
        <section className="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Combining the quality of well designed animated e-cards with the
                sensitivity and depth of the artists experience, our vision is
                to help you to reach out to those who are important to you.
                Ojolie was born out of a desire to create a service that
                provides a contemporary expression of the timeless tradition of
                sending out cards to clients and staff to share your
                appreciation.
              </p>
              <p className="italic">
                Our name Ojolie combines the word for pretty in French and the
                expression of surprise and delight.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 lg:py-24">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">
                Artist Created & Family Run
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={FrederikkeTu}
                      alt="Frederikke Tu"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Frederikke Tu</h3>
                  <p className="text-sm text-muted-foreground">
                    ARTIST & FOUNDER
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={TimothyTu}
                      alt="Timothy Tu"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Timothy Tu</h3>
                  <p className="text-sm text-muted-foreground">IT DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold">Our Story</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ojolie was founded in 2005 by Frederikke Tu, a Danish artist,
                animator and designer, who has lived in the US for twelve years.
              </p>
              <p>
                In 2011 we released our first corporate cards after many
                requests for cards tailored for businesses to send to clients
                and staff. We have been happy to serve companies from all over
                the world, who came back year after year.
              </p>
              <p>
                In 2015 we launched a new corporate site and design interface,
                that allows you to customize the way your text and logo appears
                in the card, to make ordering fast and easy for you. As always,
                we continue to be committed to serving you with great attention
                to detail and the best high quality ecards.
              </p>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <Image
            src={about2}
            alt="Abstract artistic texture"
            className="w-full object-cover"
            width={1920}
            height={600}
          />
        </section>
      </main>
    </div>
  );
};

export default page;
