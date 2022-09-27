import styled from 'styled-components';

export const Mensagem = styled.p`
  color: ${(props) => props.type === 'erro' ? 'red' : 'green'};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
 
  input {
    width: 400px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #002244;
    border-radius: 4px;
  }
`;
