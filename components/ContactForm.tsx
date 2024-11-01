import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center">
          Contact Us
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <textarea
              className="w-full h-32 px-3 py-2 text-brown-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
            ></textarea>
            <Button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white w-full"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="text-pink-500" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-pink-500" />
              <span>info@jamicakebar.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-pink-500" />
              <span>123 Cake Street, Sweet City, 12345</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
