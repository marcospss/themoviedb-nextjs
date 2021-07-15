import * as React from 'react';
import Link from 'next/link';

import { Header, Logo, Nav, List, NavItem } from './styles';

export default function Navigation(): JSX.Element {
  return (
    <Header>
      <Logo>
        <Link href="/">
          <a>The Movie Database</a>
        </Link>
      </Logo>
      <Nav>
        <List>
          <NavItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </NavItem>
        </List>
      </Nav>
    </Header>
  );
}
