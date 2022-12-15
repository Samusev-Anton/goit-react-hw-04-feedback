import React from 'react';
import { Block, Title } from './Section.styled';

const SectionStat = ({ title, children, disable }) => {
  // console.log(disable);
  return (
    <>
      {disable > 0 && (
        <Block>
          <Title>{title}</Title>
          {children}
        </Block>
      )}
    </>
  );
};
export default SectionStat;
