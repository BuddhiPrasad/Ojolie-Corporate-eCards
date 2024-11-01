import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BestSellerCardProps {
  name: string;
  price: string;
  image: string;
}

export default function BestSellerCard({
  name,
  price,
  image,
}: BestSellerCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="w-full h-64 object-cover md:h-48" // Adjust height for larger screens
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-brown-800 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">{price}</p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 text-sm md:text-base">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
