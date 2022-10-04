import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { Container, List } from './styles';
import Button from '../../components/Button';
import { getDepartamentos } from '../../services/departamentos';
import Loader from '../../components/Loader';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDepartamentos = async () => {
    setLoading(true);
    try {
      const resp = await getDepartamentos();
      setDepartamentos(resp);
      setLoading(false);
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
        <Loader fullScreen={false} />
      }
      <List>
      {departamentos.map((depto) => {

        return (
          <Card key={depto.id_departamento} to={`/departamentos/${depto.id_departamento}`}>
            <h3>{depto.nome}</h3>

            <Button
              uiType='warning'
              titulo='Editar'
              onClick={(e) => {
                e.preventDefault();
              }}
            />

            <Button
              uiType='danger'
              titulo='Excluir'
              onClick={(e) => {
                e.preventDefault();
              }}
            />

          </Card>
        )
      })}
      </List>
    </Container>
  );
}

export default Departamentos;