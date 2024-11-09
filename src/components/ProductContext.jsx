import React, { createContext, useContext, useState } from 'react';
import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.jpg';
import p9 from './images/p9.avif';
import p12 from './images/p12.webp';
import p13 from './images/p13.webp';
import p14 from './images/p14.webp';
import p15 from './images/p15.webp';
import p16 from './images/p16.avif';
import p17 from './images/p17.avif';
import p18 from './images/p18.avif';
import p19 from './images/p19.avif';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, image: p2, name: 'Tribal Dreamcatcher Necklace', price: 85.00, rating: 4 },
    { id: 2, image: p1, name: 'Vintage Rectangle Necklace', price: 50.00, rating: 5 },
    { id: 3, image: p3, name: 'Bold Red Statement Necklace', price: 70.00, rating: 3 },
    { id: 4, image: p5, name: 'Rustic Coin Pendant Necklace', price: 63.00, rating: 4 },
    { id: 5, image: p6, name: 'Scarlet Beaded Necklace', price: 63.00, rating: 2 },
    { id: 6, image: p7, name: 'Vibrant Turtle Bead Necklace', price: 63.00, rating: 5 },
    { id: 7, image: p8, name: 'Colorful Pendant Necklace', price: 63.00, rating: 4 },
    { id: 8, image: p9, name: 'Bohemian Elephant Necklace', price: 63.00, rating: 3 },
    { id: 9, image: p12, name: 'Handcrafted Pottery Vase', price: 85.00,rating: 4 },
    { id: 10, image: p13, name: 'Rustic Clay Pitcher', price: 50.00,rating: 5 },
    { id: 11, image: p14, name: 'Ceramic Tea Set', price: 70.00,rating: 4 },
    { id: 12, image: p15, name: 'Decorative Wall Plate', price: 63.00,rating: 3 },
    { id: 13, image: p16, name: 'Hand-painted Flower Pot', price: 63.00,rating: 4 },
    { id: 14, image: p17, name: 'Antique Style Bowl', price: 63.00,rating: 4.5 },
    { id: 15, image: p18, name: 'Glazed Ceramic Mug', price: 63.00 ,rating: 5},
    { id: 16, image: p19, name: 'Artisan Pottery Jar', price: 63.00 ,rating: 4},
  ]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
