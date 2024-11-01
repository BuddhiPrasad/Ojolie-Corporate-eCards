import Image from "next/image";

interface CategoryCardProps {
  name: string;
  image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <div className="bg-pink-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Responsive Image */}
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="w-full h-40 md:h-48 object-cover" // Smaller height on mobile, larger on md+
      />
      <div className="p-4">
        {/* Responsive Text */}
        <h3 className="text-base md:text-lg font-semibold text-brown-800 text-center">
          {name}
        </h3>
      </div>
    </div>
  );
}
