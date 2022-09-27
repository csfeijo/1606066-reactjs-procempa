import React, { useState } from 'react';
import Button from '../../components/Button';
import { Container, Mensagem } from './styles';
import { insereDepartamentos } from '../../services/departamentos';

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
    insereDepartamentos({
      nome,
      sigla
    });
    setMsg('Sucesso');
    setType('sucesso');
    //setNome('');
    //setSigla('');
  }

  return (
    <Container>
      <h1>Cadastro de Departamento:</h1>
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
    </Container>
  )
}

export default FormDepartamentos;