import ArtisCreated from "@/components/ArtisCreated";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import PopulerCards from "@/components/PopulerCards";
import Pricing from "@/components/Pricing";
import ReadttoTry from "@/components/ReadttoTry";
import UserCustomers from "@/components/UserCustomers";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <UserCustomers />
        <ArtisCreated />
        <PopulerCards />
        <ReadttoTry />
        <Pricing />
        <NewsLetter />
      </main>
    </div>
  );
}
