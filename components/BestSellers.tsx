import BestSellerCard from "./BestSellerCard";

export default function BestSellers() {
  const bestSellers = [
    {
      name: "Chocolate Delight",
      price: "$35",
      image: "",
    },
    {
      name: "Strawberry Dream",
      price: "$40",
      image: "",
    },
    {
      name: "Vanilla Bliss",
      price: "$30",
      image: "",
    },
  ];

  return (
    <section id="bestsellers" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center">
          Best Sellers
        </h2>
        {/* Mobile responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bestSellers.map((cake) => (
            <BestSellerCard
              key={cake.name}
              name={cake.name}
              price={cake.price}
              image={cake.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
