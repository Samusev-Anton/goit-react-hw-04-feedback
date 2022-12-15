import React from 'react';
import { Block, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Block>
      <Title>{title}</Title>
      {children}
    </Block>
  );
};
export default Section;
