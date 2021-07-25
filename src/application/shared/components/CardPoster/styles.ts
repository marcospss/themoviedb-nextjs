import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-height: 132px;
  overflow: hidden;
`;

export const Poster = styled.figure`
  position: relative;
  margin: 0;
  width: 141px;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
`;
export const Title = styled.h2`
  font-size: 0.9rem;
  margin: 0 0 0.5rem;
  font-weight: bold;
`;
export const Overview = styled.p`
  position: relative;
  margin: 0 0 0.5rem;
  height: 50px;
  overflow: hidden;
  line-height: 1rem;
  font-size: 0.9rem;
  &::after {
    content: '';
    text-align: right;
    bottom: -10px;
    left: 0px;
    width: 100%;
    height: 60px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), #fff);
    display: flex;
    position: absolute;
    overflow: hidden;
  }
`;
export const LearnMore = styled.div`
  align-self: flex-end;
  background-color: #2d3748;
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  a {
    color: #fff;
    text-decoration: none;
  }
`;
