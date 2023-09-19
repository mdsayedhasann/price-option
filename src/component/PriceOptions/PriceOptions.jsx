import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Gum Pack",
      price: 1.99,
      features: ["10 pieces of gum", "Assorted flavors", "Sugar-free"],
    },
    {
      id: 2,
      name: "Minty Fresh Pack",
      price: 2.49,
      features: [
        "15 pieces of mint-flavored gum",
        "Long-lasting freshness",
        "Sugar-free",
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
      ],
    },
    // {
    //   id: 4,
    //   name: "Gum Lover's Variety Pack",
    //   price: 3.99,
    //   features: ["20 pieces of assorted gum", "Mix of flavors", "Sugar-free"],
    // },
    // {
    //   id: 5,
    //   name: "Classic Bubblegum Pack",
    //   price: 1.79,
    //   features: [
    //     "8 pieces of classic bubblegum",
    //     "Nostalgic flavor",
    //     "Sugar-free",
    //   ],
    // },
    // {
    //   id: 6,
    //   name: "Tropical Fruit Delight",
    //   price: 2.79,
    //   features: [
    //     "14 pieces of tropical fruit gum",
    //     "Exotic fruit flavors",
    //     "Sugar-free",
    //   ],
    // },
    // {
    //   id: 7,
    //   name: "Cool Peppermint Pack",
    //   price: 2.29,
    //   features: [
    //     "12 pieces of peppermint gum",
    //     "Cooling sensation",
    //     "Sugar-free",
    //   ],
    // },
    // {
    //   id: 8,
    //   name: "Bubblegum Blast Pack",
    //   price: 2.19,
    //   features: [
    //     "10 pieces of bubblegum",
    //     "Intense bubblegum flavor",
    //     "Sugar-free",
    //   ],
    // },
    // {
    //   id: 9,
    //   name: "Citrus Splash Pack",
    //   price: 2.49,
    //   features: [
    //     "15 pieces of citrus-flavored gum",
    //     "Zesty and refreshing",
    //     "Sugar-free",
    //   ],
    // },
    // {
    //   id: 10,
    //   name: "Extra Chewy Pack",
    //   price: 2.69,
    //   features: [
    //     "18 pieces of extra-chewy gum",
    //     "Extended flavor",
    //     "Sugar-free",
    //   ],
    // },
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
