import React, { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { APP_ROUTES, RouteContext } from '../../App';
import { Secondary } from '../../Variables';

export default function AppBackground({ children }: PropsWithChildren<{}>) {
  const route = useContext(RouteContext);

  const colors = {
    [APP_ROUTES.HOME]: Secondary,
  };

  const Background = styled.div`
    height: 100vh;
    overflow: hidden;
    background: ${colors[route]};
  `;

  return <Background>{children}</Background>;
}
