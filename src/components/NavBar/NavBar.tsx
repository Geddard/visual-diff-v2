import React from 'react';
import styled from 'styled-components';
import { Primary, PxUnit } from '../../Variables';

const navHeight = PxUnit(4);

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  height: ${navHeight};
  margin-right: ${PxUnit(2)};
  padding: ${PxUnit(1)} 0;
  text-align: right;
  background: transparent;
`;

const Buttons = styled.div`
  width: 30%;
  border-bottom: 1px solid ${Primary};
`;

export default function NavBar() {
  return (
    <Nav>
      <Buttons>POPLETA</Buttons>
    </Nav>
  );
}
