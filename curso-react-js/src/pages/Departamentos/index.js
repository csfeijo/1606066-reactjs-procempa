import React from 'react';
import Card from '../../components/Card';
import { Container, List } from './styles';
import Button from '../../components/Button';

const Departamentos = () => {

  const departamentos = [
    { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 2, nome: 'Financeiro', sigla: 'FINANC' },
    { id: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
  ]

  return (
    <Container>
      <h1>Departamentos</h1>

      <List>
      {departamentos.map((depto) => {
        return (
          <Card key={depto.id} to={`/departamentos/${depto.id}`}>
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