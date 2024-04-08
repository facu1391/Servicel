import React from 'react';

const NavMenu = () => {
  return (
    <nav className="flex items-center gap-7 mx-auto ">
      <a className="font-medium" href="#" rel="ugc">Equipment</a>
      <a className="font-medium" href="#" rel="ugc">Accessories</a>
      <a className="font-medium" href="#" rel="ugc">Parts</a>
      <a className="font-medium" href="#" rel="ugc">Services</a>
    </nav>
  );
}

export default NavMenu;