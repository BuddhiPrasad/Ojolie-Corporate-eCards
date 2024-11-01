"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  message: string;
};

const page = () => {
  const form = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="bg-muted">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Contact Us
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  We will get back to you as soon as possible
                </p>
              </div>
              <div className="mt-12">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid gap-4 sm:grid-cols-[auto,1fr]">
                        <FormItem className="w-[120px]">
                          <FormLabel className="sr-only">
                            Country Code
                          </FormLabel>
                          <Select defaultValue="US">
                            <SelectTrigger>
                              <SelectValue placeholder="US (+1)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">US (+1)</SelectItem>
                              <SelectItem value="UK">UK (+44)</SelectItem>
                              <SelectItem value="DK">DK (+45)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="(555) 555-5555"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write here... please include best time to reach you in case of call back. Please note our business hours below."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-[#ff7f6a] text-white hover:bg-[#ff7f6a]/90"
                      >
                        SEND MESSAGE
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="mt-12 space-y-6 text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <p>NØRREVANG 73, 1. TH, 3460 BIRKERØD, DENMARK</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <p>CORPORATE@OJOLIE.COM</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <p>+1-617-544-3319</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <p>6 AM-4PM EST/12-22 CET+1 (COPENHAGEN)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
