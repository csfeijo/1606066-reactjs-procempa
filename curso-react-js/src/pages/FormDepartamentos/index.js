import React, { useState } from 'react';
import Button from '../../components/Button';
import { Container, Mensagem } from './styles';
import { insereDepartamentos } from '../../services/departamentos';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { incrementCounter } from '../../store/counter/counterSlice';

const FormDepartamentos = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('erro');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

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

    (async () => {
      setLoading(true);
      const resp = await insereDepartamentos({
        nome,
        sigla
      })

      if (resp.status && resp.status === 500) {
        setMsg('Erro no servidor!');
        setType('erro');
      } else {
        // incrementa o count
        dispatch(incrementCounter());
        // implementação dos casos de sucesso
        setMsg('Departamento cadastrado');
        setLoading(false);
        setType('sucesso');
        setNome('');
        setSigla('');
      }
    })()    
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
        onClick={validaForm}
      >
        {loading &&
          <>
            <Loader/> Carregando
          </>
        }

        {!loading &&
          <>Enviar</>
        }
      </Button>

      <Mensagem type={type}>{msg}</Mensagem>
    </Container>
  )
}

export default FormDepartamentos;