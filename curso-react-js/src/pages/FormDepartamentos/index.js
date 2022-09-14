import React, { useState } from 'react';
import Button from '../../components/Button';

const FormDepartamentos = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');

  // validacao do formulario
  const validaForm = () => {
    if (nome === '') {
      setMsg('Preencha o nome');
      return false;
    }

    if (sigla === '') {
      setMsg('Preencha a sigla');
      return false;
    }
    
    // sucesso!
    setMsg('Sucesso');
    setNome('');
    setSigla('');
  }

  return (
    <>
      <input 
        type='text'
        name='nome'
        id='nome'
        placeholder='Nome'
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <br/>
      <input 
        type='text'
        name='sigla'
        id='sigla'
        placeholder='Sigla'
        value={sigla}
        onChange={(e) => {
          setSigla(e.target.value);
        }}        
      />
      <br/>
      <Button 
        titulo='Enviar'
        onClick={validaForm}
      />
      <p>{msg}</p>
    </>
  )
}

export default FormDepartamentos;