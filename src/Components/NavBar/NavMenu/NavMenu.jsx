import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className="flex items-center gap-7 mx-auto ">
      <Link className="font-medium" to="/equipo">Equipo</Link>
      <Link className="font-medium" to="/accesorios">Accesorios</Link>
      <a className="font-medium" href="#" rel="ugc">Partes</a>
      <Link className="font-medium" to="/servicios">Servicios</Link>
    </nav>
  );
}

export default NavMenu;