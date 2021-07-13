import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  z-index: 50;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  padding:0.5rem;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.div`
  padding: 0 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
`;

export const NavItem = styled.li`
  list-style: none;
  padding-right: 2rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${({ theme: { colors } }) => colors.body};
    color: ${({ theme: { colors } }) => colors.primary};
    padding: 0.5rem 2rem;
    font-weight: 700;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    border-radius: 9999px;
    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
      background-color: ${({ theme: { colors } }) => colors.secondary};
    }
  }
`;
