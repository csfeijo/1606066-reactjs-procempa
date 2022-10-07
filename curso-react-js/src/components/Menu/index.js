import React from 'react';
import { LinkNav, Nav } from './styles';
import { useSelector } from 'react-redux';
import { counterValue } from '../../store/counter/counterSlice';


const Menu = () => {

  const count = useSelector(counterValue);

  return (
    <Nav>
      <h1>Curso de ReactJS</h1>
      <LinkNav to='/'>Home</LinkNav>
      <LinkNav to='/departamentos'>({count}) Departamentos</LinkNav>
      <LinkNav to='/departamentos/new'>Add Departamento</LinkNav>
    </Nav>
  )
}

export default Menu;