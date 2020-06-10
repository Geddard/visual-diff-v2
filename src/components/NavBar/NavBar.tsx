import React, { useContext } from 'react';
import styled from 'styled-components';
import { APP_ROUTES, RouteContext } from '../../App';
import { PxUnit } from '../../Mixins';
import { Primary } from '../../Variables';
import { NavButton } from '../Button/Button';

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
  const route = useContext(RouteContext);

  return (
    <>
      {route !== APP_ROUTES.HOME && (
        <Nav>
          <Buttons>
            <NavButton>Home</NavButton>
          </Buttons>
        </Nav>
      )}
    </>
  );
}
