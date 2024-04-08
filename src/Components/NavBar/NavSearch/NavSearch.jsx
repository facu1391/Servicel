import React from 'react';

const NavSearch = () => {
  return (
    <div className="flex ml-auto items-center gap-4 lg:gap-8 mr-5">
      <form className="flex-1">
        <input type="buscar" className="flex h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm rounded-lg border-2 border-gray-200/40 dark:border-gray-800/40" placeholder="Buscar productos..." />
      </form>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
        Buscar
      </button>
    </div>
  );
}

export default NavSearch;