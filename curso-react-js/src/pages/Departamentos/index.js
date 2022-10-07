import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { Container, List } from './styles';
import Button from '../../components/Button';
import { getDepartamentos } from '../../services/departamentos';
import Loader from '../../components/Loader';
import { resetCounter } from '../../store/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loadDepartamentos = async () => {
    setLoading(true);
    try {
      const resp = await getDepartamentos();
      setDepartamentos(resp);
      setLoading(false);
      dispatch(resetCounter());
    } catch (e) {
      console.error('Erro!');
    }
  }

  useEffect(() => {
    if(departamentos.length === 0) {
      loadDepartamentos();
    }
  }, [departamentos])
  
  return (
    <Container>
      <h1>Departamentos</h1>
      {loading && 
        <Loader fullScreen={true} />
      }
      <List>
      {departamentos.map((depto) => {

        return (
          <Card key={depto.id_departamento} to={`/departamentos/${depto.id_departamento}`}>
            <h3>{depto.nome}</h3>

            <Button
              uiType='warning'
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Editar
            </Button>

            <Button
              uiType='danger'
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Excluir
            </Button>

          </Card>
        )
      })}
      </List>
    </Container>
  );
}

export default Departamentos;