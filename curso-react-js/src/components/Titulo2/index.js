import React from 'react';

const Titulo2 = ({ nome }) => {

  return (
    <h1>{nome ? `Curso selecionado: ${nome}` : 'Nenhum curso selecionado'}</h1>
  )
}

export default Titulo2;