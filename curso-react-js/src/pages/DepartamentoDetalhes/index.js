import React from 'react';
import { useParams } from 'react-router-dom';

const DepartamentoDetalhes = () => {

  const { idDepartamento } = useParams();

  return (
    <>
      <h1>Detalhes do Departamento</h1>
      <p>ID do Departamento: {idDepartamento}</p>
    </>
  )
}

export default DepartamentoDetalhes;

