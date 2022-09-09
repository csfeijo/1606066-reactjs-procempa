import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/departamentos'>Departamentos</Link>
    </nav>
  )
}

export default Menu;