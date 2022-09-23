import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
  background: ${({ theme }) => theme.colors.background};
  color:  #002244;
  text-decoration: none;
  display: flex;
  width: 300px;
  height: 150px;
  border-radius: 4px;

  align-items: center;
  /* justify-content: center; */
  /* flex-direction: column; */
  margin: 10px;

  /* FAZ COM QUE OS BOTÕES FIQUEM NO CENTRO E ABAIXO DO TITULO */
  justify-content: space-evenly;
  flex-wrap: wrap;

  h3, button {
    display: inline-block;
  }
  h3 {
    width: 100%;
    text-align: center;
  }
  button {
    flex: 0;
  }
`;

export default CardLink;
