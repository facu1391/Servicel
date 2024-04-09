import React from 'react';

const Banner = () => {
  return (
    <section className="flex flex-col gap-4 p-4 justify-center items-center md:grid md:gap-8 md:grid-cols-[1fr_2/3] lg:gap-12 lg:p-6 xl:gap-16 mt-8">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <a className="font-semibold text-2xl lg:text-4xl text-center" href="#" rel="ugc">
            Spring Sale
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Get up to 50% off on selected items. Limited time offer.
          </p> 
        </div>
        <a className="inline-block" href="#" rel="ugc">
          <img src="/placeholder.svg" width="1200" height="400" alt="Banner" className="aspect-video object-cover rounded-lg overflow-hidden border"/>
          <span className="sr-only">Banner</span>
        </a>
      </div>
    </section> 
  );
}

export default Banner;