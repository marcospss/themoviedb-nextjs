import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  padding: 0 2rem;
  @media screen and (min-width: 600px) and (max-width: 801px) {
    grid-template-columns: repeat(2, 1fr);
    & > article {
      padding: 0;
      &:nth-child(1) {
        grid-row: span 2;
        grid-column: span 2;
      }
    }
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    & > article {
      padding: 0;
      &:nth-child(1) {
        grid-row: span 3;
        grid-column: span 3;
      }
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    & > article {
      padding: 0;
      &:nth-child(1) {
        grid-row: span 4;
        grid-column: span 4;
      }
    }
  }
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  @media screen and (min-width: 600px) and (max-width: 801px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
  }
`;

export const BoxCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: ${({ theme: { colors } }) => colors.blue};
  border-radius: 0.5rem;
  width: fit-content;
  padding: 0.8rem 2rem;
`;

export const Alert = styled.div`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 1px;
  margin: 2rem 0;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &.success {
    background-color: rgba(227, 253, 235, 1);
    border-color: rgba(38, 179, 3, 1);
    color: rgba(60, 118, 61, 1);
  }
  &.info {
    background-color: rgba(217, 237, 247, 1);
    color: rgba(49, 112, 143, 1);
    border-color: rgba(126, 182, 193, 1);
  }
  &.warning {
    background-color: rgba(252, 248, 227, 1);
    border-color: rgba(177, 161, 129, 1);
    color: rgba(138, 109, 59, 1);
  }

  &.danger {
    background-color: rgba(248, 215, 218, 1);
    border-color: rgba(220, 53, 69, 1);
    color: rgba(114, 28, 36, 1);
  }
`;
