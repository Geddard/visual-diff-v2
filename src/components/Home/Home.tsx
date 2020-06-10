import React from 'react';
import styled from 'styled-components';
import { AA, AfterArea } from '../../Mixins';
import LeftGraphic from './LeftGraphic';
import './styles/Home.ts';

const HomeWrapper = styled.div`
  position: relative;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const BigBtn = styled.div`
  ${AA}
  ${AfterArea(15)}
  
  color: white;
  font-weight: bold;
  font-size: 50px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(1deg);
  }
`;

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
