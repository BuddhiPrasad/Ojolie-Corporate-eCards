import CategoryCard from "./CategoryCard";

export default function Categories() {
  const categories = [
    {
      name: "Birthday Cakes",
      image: "",
    },
    {
      name: "Wedding Cakes",
      image: "",
    },
    {
      name: "Cupcakes",
      image: "",
    },
    {
      name: "Pastries",
      image: "",
    },
  ];

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center">
          Our Categories
        </h2>
        {/* Mobile responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
