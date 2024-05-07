import React from 'react';
import Card from './Card/Card'; 

const Cards = () => {
  // Datos de ejemplo para las tarjetas
  const cardsData = [
    { title: 'Shoes!', description: 'If a dog chews shoes whose shoes does he choose?', imageUrl: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
    { title: 'Shoes!', description: 'If a dog chews shoes whose shoes does he choose?', imageUrl: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
    { title: 'Shoes!', description: 'If a dog chews shoes whose shoes does he choose?', imageUrl: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
    { title: 'Shoes!', description: 'If a dog chews shoes whose shoes does he choose?', imageUrl: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
    { title: 'Shoes!', description: 'If a dog chews shoes whose shoes does he choose?', imageUrl: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
    { title: 'Shoes!', description: 'If a dog chews shoes whose shoes does he choose?', imageUrl: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },

  ];

  return (
    <section className="flex flex-col gap-4 p-4 md:grid md:gap-8 md:grid-cols-[1fr_2/3] lg:gap-12 lg:p-6 xl:gap-16">
      <div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Cards;