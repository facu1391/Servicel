import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <div className="hidden lg:flex items-center gap-4 mx-auto">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
        <span>Servicel</span>
      </Link>
    </div>
  );
}

export default NavLogo;