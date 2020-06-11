import { PxUnit } from 'Mixins';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Primary } from 'Variables';

const BaseButton = styled.button`
  min-width: 160px;
  height: ${PxUnit(5)};
  padding: 0 ${PxUnit(4)};
  color: ${Primary};
  font-size: 18px;
  background-color: transparent;
  border: 1px solid ${Primary};
  border-radius: 3px;
  cursor: pointer;
`;

export function Button(props: PropsWithChildren<{}>) {
  return <BaseButton>{props.children}</BaseButton>;
}

export function NavButton(props: any) {
  return <Button {...props} />;
}
