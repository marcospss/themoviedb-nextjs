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
