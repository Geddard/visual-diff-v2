import { css } from 'styled-components';

export const PxUnit = (factor: 1 | 2 | 3 | 4 | 5) => `${8 * factor}px`;

export const AfterArea = (factor: 5 | 10 | 15) => css`
  position: relative;

  &:after {
    position: absolute;
    top: -${factor}px;
    right: -${factor}px;
    bottom: -${factor}px;
    left: -${factor}px;
    content: '';
  }
`;

export const AA = css`
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
`;
