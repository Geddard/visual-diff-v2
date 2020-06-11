import React from 'react';
import LeftGraphic from './LeftGraphic';
import { BigBtn, ButtonsWrapper, HomeWrapper } from './styles/Home';

export default function Home() {
  return (
    <HomeWrapper>
      <LeftGraphic />
      <ButtonsWrapper>
        <BigBtn>+ New Project</BigBtn>
      </ButtonsWrapper>
    </HomeWrapper>
  );
}
