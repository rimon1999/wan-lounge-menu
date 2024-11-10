// HookahMenu.tsx
import React from 'react';
import MenuSection from './MenuSection';

const hookahData = {
  classic: {
    name: "Classic Hookah",
    items: [
      { id: 1, name: "Double Apple",  price: "$15", pictureUrl: require('./Hookah.jpg') },
      { id: 2, name: "Mint", price: "$15", pictureUrl: require('./Hookah.jpg') },
    ],
  },
  fruitMixes: {
    name: "Fruit Mixes",
    items: [
      { id: 1, name: "Watermelon Mint",  price: "$18", pictureUrl: require('./Hookah.jpg') },
      { id: 2, name: "Pineapple Coconut",  price: "$18", pictureUrl: require('./Hookah.jpg') },
    ],
  },
  gourmet: {
    name: "Gourmet Flavors",
    items: [
      { id: 1, name: "Blueberry Muffin",  price: "$20", pictureUrl: require('./Hookah.jpg') },
      { id: 2, name: "Cappuccino",  price: "$20", pictureUrl: require('./Hookah.jpg') },
    ],
  },
  special: {
    name: "Special Blends",
    items: [
      { id: 1, name: "Spicy Mango", price: "$22", pictureUrl: require('./Hookah.jpg') },
      { id: 2, name: "Cinnamon Apple", price: "$22", pictureUrl: require('./Hookah.jpg') },
    ],
  },
};

const HookahMenu = () => (
  <MenuSection title="Hookah Menu" sections={hookahData} initialSection="classic" />
);

export default HookahMenu;
