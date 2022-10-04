import styled, { css } from 'styled-components';

const Container = styled.div`
  ${props => {
    if (props.fullScreen) {
      return (
        css`
          background: rgba(0, 0, 0, 0.4);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        `
      )
    }
  }}
`;

export default Container;