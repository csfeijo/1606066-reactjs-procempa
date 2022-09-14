import React from 'react';
import { Link } from 'react-router-dom';

const Departamentos = () => {

  const departamentos = [
    { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 2, nome: 'Financeiro', sigla: 'FINANC' },
    { id: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
  ]

  return (
    <>
      <h1>Departamentos</h1>
      {departamentos.map((depto) => {
        return <Link 
                  key={depto.id}
                  to={`/departamentos/${depto.id}`}>
                  {depto.nome}
                </Link>
      })}
    </>
  );
}

export default Departamentos;