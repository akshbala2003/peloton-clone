import React from 'react';

const products = [
  {
    id: 1,
    title: 'Bike',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png',
    href: '/bike',
  },
  {
    id: 2,
    title: 'Bike+',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/25rzIyGV8UqvoN79I2AOGU/8e59018081f7decb2fb71a63b497f111/bike-plus-belly.png',
    href: '/bike-plus',
  },
  {
    id: 3,
    title: 'Row',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/4D6LcrY5vDyDhoAbytzY40/bfad74751baf27e69d0fe39147ab1a0d/Peloton_Row_BellyBand.png',
    href: '/row',
  },
  {
    id: 4,
    title: 'Tread',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/39UuwumUIf38aRRLKAkiSZ/05c04f2345215238683521750caf6616/04-bellyband-tread.png',
    href: '/tread',
  },
  {
    id: 5,
    title: 'Tread+',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/ApKx6MrInrHk7GWT5ftFp/f1a652fa9ddfb203927e31fbe8404e02/belly-tread-plus.png',
    href: '/tread-plus',
  },
  {
    id: 6,
    title: 'Guide',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/7bP3mIakbWrVWQP425o2bh/4a01f717bdb3b047b253c046ff6055e1/Guide_Band_HP.png',
    href: '/guide',
  },
  {
    id: 7,
    title: 'App',
    imageUrl: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/66sPzRQnIfRfj0j6bbPklm/d7d566b1c46998637408af7d2e37698e/AppBelly.png',
    href: '/app',
  },
];

const ProductCards = () => {
  return (
    <nav className="flex bg-[rgb(245,247,249)] product-cards w-full h-[300px] overflow-x-auto">
      <ul className="items-center product-list flex justify-evenly space-x-6 ">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white mx-[10px] product-item transition-transform duration-300 transform hover:scale-110 hover:shadow-xl"
          >
            <a href={product.href} className="product-link block text-center">
              <picture>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="mx-auto w-full h-full"
                />
              </picture>
              <p className="mt-2 text-gray-700">{product.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductCards;
