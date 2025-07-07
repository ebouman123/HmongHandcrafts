import HomeButton from "../../components/HomeButton";

const shopItems = [
  {
    id: 1,
    title: "Beginner Paj Ntaub Kit",
    description:
      "Includes pre-cut fabric, threads, needles, and a guide to traditional cross-stitch patterns. Perfect for first-timers!",
    image: "/images/kit-beginner.jpeg",
    price: "$25",
  },
  {
    id: 2,
    title: "Story Cloth Starter Set",
    description:
      "A set of fabric panels, reference patterns, and storytelling prompts to begin your own Hmong story cloth.",
    image: "/images/kit-storycloth.jpeg",
    price: "$35",
  },
];

const Shop = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-raisin_black-500">
      <HomeButton />

      <h1 className="text-3xl font-bold text-razzmatazz-500 mb-8 text-center">
        Shop Mandora's Kits
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-raisin_black-600">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-lg font-bold text-kelly_green-600">
                {item.price}
              </p>
              {/* add Stripe later */}
              <button className="bg-risd_blue-500 text-white px-4 py-2 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
