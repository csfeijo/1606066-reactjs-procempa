import React from 'react';
import { Link } from 'react-router-dom';

const Departamentos = () => {

  return (
    <>
      <h1>Departamentos</h1>
      <Link to='/departamentos/10'>Departamento 10</Link>
    </>
  );
}

export default Departamentos;