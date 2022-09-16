import React, { useState } from 'react';
import Button from '../../components/Button';
import Mensagem from './styles';

const FormDepartamentos = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('erro');

  // validacao do formulario
  const validaForm = () => {
    if (nome === '') {
      setMsg('Preencha o nome');
      setType('erro');
      return false;
    }

    if (sigla === '') {
      setMsg('Preencha a sigla');
      setType('erro');
      return false;
    }
    
    // sucesso!
    setMsg('Sucesso');
    setType('sucesso');
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
      <Mensagem type={type}>{msg}</Mensagem>
    </>
  )
}

export default FormDepartamentos;