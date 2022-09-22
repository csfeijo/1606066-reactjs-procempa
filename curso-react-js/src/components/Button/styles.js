import styled, { css } from "styled-components";

const getUiType = (uiType) => {
  switch(uiType) {
    case 'success':
      return (css`
        background: #198754;
        color: white;
      `)
    case 'danger':
      return (css`
        background: #dc3545;
        color: white;
      `)
    case 'warning':
      return (css`
        background: #ffc107;
      `)
    default:
      return (css`
        background: ${({ theme }) => theme.colors.background};
      `)
  }
}

const BaseButton = styled.button`
  font-weight: bold;
  padding: 8px;

  ${props => getUiType(props.uiType)}
`;

export default BaseButton;