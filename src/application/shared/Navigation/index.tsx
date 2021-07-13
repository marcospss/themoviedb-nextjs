import * as React from 'react';
import Link from 'next/link';

import { Header, Logo, Nav, List, NavItem } from './styles';

export default function Navigation(): JSX.Element {
  return (
    <Header>
      <Logo>Next.js TypeScript!</Logo>
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
