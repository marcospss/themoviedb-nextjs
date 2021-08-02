import styled from 'styled-components';
import * as C from '~/application/styles/commons';

export const Filters = styled(C.GridList)`
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
`;

export const Input = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 1rem;
  width: 100%;
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  select {
    width: 100%;
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: ${({ theme: { colors } }) => colors.white};
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  }
  button {
    font-weight: bold;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    width: fit-content;
  }
`;
