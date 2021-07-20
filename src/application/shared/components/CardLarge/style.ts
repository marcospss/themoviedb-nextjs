import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  border-radius: 0.5rem;
  a {
    width: 100%;
    &:hover {
      text-decoration: underline;
    }
  }
  :not(:nth-child(0)) > p {
    height: 100px;
    overflow: hidden;
  }
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  h1 {
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
    font-weight: bold;
    background: #ffffff80;
    width: 100%;
    padding: 0.5rem;
    margin: 0;
  }
`;
export const Overview = styled.p`
  padding: 1rem 0.6rem;
  font-size: 0.9rem;
  line-height: 1.2rem;
  width: 100%;
  &::after {
    content: '';
    text-align: center;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), #fff);
    display: block;
    position: absolute;
    overflow: hidden;
  }
`;
