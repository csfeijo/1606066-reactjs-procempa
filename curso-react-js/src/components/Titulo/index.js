import React from 'react';

const Titulo = ({ nome = 'Vazio', numero, onClick }) => {
  return ( 
    <>
      <h1 onClick={onClick}>Bem vindo {nome} - {numero}</h1>
      <hr/>
    </>
  )
}

export default Titulo;