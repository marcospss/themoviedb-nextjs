import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme: { colors } }) => colors.fourth};
  color: #fff;
  h2 {
    margin: 0px;
  }
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    margin: 0.5rem 0;
  }
`;
