import React from 'react';
import {
  SecondWord,
  Title,
  Triangle,
  TriangleFifth,
  TriangleFourth,
  TriangleSecond,
  TriangleThird,
  TriangleTop,
  Word
} from './styles/Home';

export default function LeftGraphic() {
  return (
    <>
      <Triangle>
        <TriangleTop />
        <TriangleSecond />
        <TriangleThird />
        <TriangleFourth />
        <TriangleFifth />
      </Triangle>
      <Title>
        <Word>Visual</Word>
        <SecondWord>Diff</SecondWord>
      </Title>
    </>
  );
}
