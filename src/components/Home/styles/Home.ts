import styled from 'styled-components';
import { PxUnit } from '../../../Mixins';
import { Grayscale, Secondary, z1 } from '../../../Variables';

const leftTransition = 'left 0.3s';
const WordTopOffset = PxUnit(2);

export const Title = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  z-index: ${z1};
  color: ${Secondary};
  font-weight: bold;
  font-size: 50px;
  cursor: pointer;
  transition: ${leftTransition};
  pointer-events: none;
`;

export const Word = styled(Title)`
  position: relative;
  top: 0;
  left: -10%;
  transition: top 0.3s;
`;

export const SecondWord = styled(Word)`
  left: 100%;
`;

export const TriangleBase = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: -5%;
  width: 0;
  height: 0;
  border-right: 25vw solid transparent;
  border-bottom: 100vh solid ${Grayscale};
  cursor: pointer;
  transition: ${leftTransition};
`;

export const TriangleTop = styled(TriangleBase)`
  top: -4vh;
  left: 1vw;
  border-right: 10vw solid transparent;
  border-bottom: 25vh solid ${Grayscale};
  transform: rotate(-15deg);
`;

export const TriangleSecond = styled(TriangleBase)`
  top: -8vh;
  left: 5vw;
  border-right: 10vw solid transparent;
  border-bottom: 15vh solid ${Grayscale};
  transform: rotate(15deg);
`;

export const TriangleThird = styled(TriangleBase)`
  top: -20vh;
  left: 5vw;
  border-right: 10vw solid transparent;
  border-bottom: 35vh solid ${Grayscale};
  transform: rotate(-45deg);
`;

export const TriangleFourth = styled(TriangleBase)`
  top: -34vh;
  left: 12vw;
  border-right: 10vw solid transparent;
  border-bottom: 35vh solid ${Grayscale};
  transform: rotate(-30deg);
`;

export const TriangleFifth = styled(TriangleBase)`
  top: -46vh;
  left: 18vw;
  border-right: 10vw solid transparent;
  border-bottom: 35vh solid ${Grayscale};
  transform: rotate(-30deg);
`;

export const Triangle = styled(TriangleBase)`
  &:hover {
    left: 0;

    ${TriangleTop} {
      left: 5vh;
    }
    ${TriangleSecond} {
      left: 8vw;
    }
    ${TriangleThird} {
      left: 10vw;
    }
    ${TriangleFourth} {
      left: 15vw;
    }
    ${TriangleFifth} {
      left: 23vw;
    }

    ~ ${Title} {
      left: 10vw;
      -webkit-text-stroke: 1px white;

      ${Word} {
        top: -${WordTopOffset};
      }

      ${SecondWord} {
        top: ${WordTopOffset};
      }
    }
  }
`;
