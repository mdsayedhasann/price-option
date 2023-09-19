import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Gum Pack",
      price: 1.99,
      features: ["10 pieces of gum", "Assorted flavors", "Sugar-free", "10 pieces of gum", "10 pieces of gum"],
    },
    {
      id: 2,
      name: "Minty Fresh Pack",
      price: 2.49,
      features: [
        "15 pieces of mint-flavored gum",
        "Long-lasting freshness",
        "Sugar-free",
        "Long-lasting freshness",
        "Long-lasting freshness",
      ],
    },
    {
      id: 3,
      name: "Fruit Blast Pack",
      price: 2.99,
      features: [
        "12 pieces of fruit-flavored gum",
        "Variety of fruity flavors",
        "Sugar-free",
        "Sugar-free",
        "Sugar-free",
      ],
    },
  ];

  return (
    <div>
      <h1>Prices</h1>
      <h2 className="text-5xl">Best Prices for the month</h2>

      <div className="grid grid-cols-3 my-14 gap-2"> 
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
