"use client";

import { useState } from "react";

const toursArr = [
  {
    id: 1,
    name: "Best of Paris in 7 Days Tour",
    price: "$1,995",
    img: "https://www.course-api.com/images/tours/tour-1.jpeg",
    shortDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    longDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    name: "Best of Ireland in 14 Days Tour",
    price: "$3,895",
    img: "https://www.course-api.com/images/tours/tour-2.jpeg",
    shortDesc:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...",
  },
  {
    id: 3,
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    price: "$2,695",
    img: "https://www.course-api.com/images/tours/tour-3.jpeg",
    shortDesc:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...",
  },
  {
    id: 4,
    name: "Best of Rome in 7 Days Tour",
    price: "$2,095",
    img: "https://www.course-api.com/images/tours/tour-4.jpeg",
    shortDesc:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...",
  },
  {
    id: 5,
    name: "Best of Poland in 10 Days Tour",
    price: "$2,595",
    img: "https://www.course-api.com/images/tours/tour-5.jpeg",
    shortDesc:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...",
  },
];

export default function Home() {
  const [tours, setTours] = useState(toursArr);

  const longDesc = () => {};

  const clearAll = () => {
    setTours([]);
  };

  const resetAll = () => {
    setTours(toursArr);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div>
        <p>Our Tours</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {tours.map((tour) => {
          return (
            <div
              className="flex flex-col bg-white w-75 h-120 rounded-2xl justify-between items-center gap-2"
              key={tours.length}
            >
              <img
                className="w-70 h-50 object-cover rounded-2xl mt-2"
                src={tour.img}
                alt=""
              />
              <p className="text-black">{tour.name}</p>
              <p className="text-gray-500 mx-8">{tour.shortDesc}</p>
              <button className="text-green-500">Read More</button>
              <button className="text-green-600 border-2 w-60 mb-2">
                Not Interested
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
