import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Sintaxe Tagged Template
export const Nav = styled.nav`
  background: #E1E1E1;
  padding: 10px;
  display: flex;

  h1 {
    margin-right: 60px;
  }
`;

export const LinkNav = styled(Link)`
  color: #002244;

  display: flex;
  align-items: center;
  padding: 0 40px;

  border-right: 1px dashed #002244;
  text-decoration: none;

  &:hover {
    background: #002244;
    color: #e1e1e1;
  }  
`;

