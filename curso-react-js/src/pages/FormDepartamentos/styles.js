import styled from 'styled-components';

const Mensagem = styled.p`
  color: ${(props) => props.type === 'erro' ? 'red' : 'green'};
  
`;

export default Mensagem;
