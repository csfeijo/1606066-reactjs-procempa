import React from 'react';
import { LinkNav, Nav } from './styles';
import { useSelector } from 'react-redux';
import { counter } from '../../store/counter/counterSlice';


const Menu = () => {

  const count = useSelector(counter);

  return (
    <Nav>
      <h1>Curso de ReactJS - {count.value}</h1>
      <LinkNav to='/'>Home</LinkNav>
      <LinkNav to='/departamentos'>Departamentos</LinkNav>
      <LinkNav to='/departamentos/new'>Add Departamento</LinkNav>
    </Nav>
  )
}

export default Menu;