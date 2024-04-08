import React from 'react';
import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';
import NavSearch from './NavSearch/NavSearch';

const Nav = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-8 xl:gap-12">
        <header className="flex items-center justify-between lg:items-center lg:gap-8 mt-4 px-4 lg:px-0">
          <NavLogo />
          <NavMenu />
          <NavSearch />
        </header>
      </div>
    </>
  )
}

export default Nav;