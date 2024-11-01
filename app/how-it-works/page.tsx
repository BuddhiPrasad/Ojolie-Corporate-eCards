import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import howitwork from "@/assets/how-it-work.avif";
import howitwork2 from "@/assets/how-it-work-2.png";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col mx-auto">
      <main className="flex-1">
        <section className="bg-muted">
          <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                See how it works
              </h1>
              <div className="mt-12">
                <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl border bg-background shadow-lg">
                  <Image
                    src={howitwork}
                    alt="Product demo illustration"
                    className="object-cover"
                    fill
                    priority
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90 text-primary hover:bg-background/95"
                  >
                    <PlayCircle className="h-8 w-8" />
                    <span className="sr-only">Play demo video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Try Before You Buy
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                It just takes a few minutes to create your first draft and we
                have a{" "}
                <Link href="#" className="text-primary underline">
                  one minute tutorial
                </Link>{" "}
                that shows you how. You can see{" "}
                <Link href="#" className="text-primary underline">
                  how the deliverables work
                </Link>{" "}
                and look, download an email template and receive a link for a
                sample of your card in your account. If you decide to order the
                card, the watermark will be removed. Orders, except those
                needing customization, will be ready within minutes. Create a
                free account now to try it out!
              </p>
              <Button size="lg" className="mt-8">
                Get Started
              </Button>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Here is a Sample of your Draft Card
                      </h3>
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={howitwork2}
                          alt="Sample card preview"
                          fill
                          className="object-cover"
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90"
                        >
                          <PlayCircle className="h-8 w-8" />
                          <span className="sr-only">
                            Play sample card video
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h4 className="mb-4 font-semibold uppercase tracking-wide">
                          Deliverables
                        </h4>
                        <div className="grid gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10" />
                            <div className="text-sm">Link for your card</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10" />
                            <div className="text-sm">Email template</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10" />
                            <div className="text-sm">Sample card</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-4 font-semibold uppercase tracking-wide">
                          Email Template
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Use our email template or create your own.
                        </p>
                        <Button variant="outline" className="mt-4">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted">
          <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold">
                Still have questions or need help with your logo?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Your logo should be in a transparent .png format.
              </p>
              <p className="mt-2 text-muted-foreground">
                If you need help with your logo or have other questions,{" "}
                <Link href="#" className="text-primary underline">
                  get in touch
                </Link>
                .
              </p>
              <p className="mt-2 text-muted-foreground">We are here to help!</p>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold">Ready to try it out?</h2>
              <p className="mt-4 text-muted-foreground">
                Create a free account and start creating drafts right away!
                Easily share with your team to get feedback before ordering.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="max-w-xs"
                />
                <Button>Give it a try</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
