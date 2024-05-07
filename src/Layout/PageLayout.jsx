import React from 'react'
import NavBar from '../Components/NavBar/Nav';

const PageLayout = ({children}) => {
  return (
    <section>
        <NavBar/>
        {children}
    </section>
  )
}

export default PageLayout;