import React from 'react';
import { ButtonBox, Button } from './Controls.styled';

const Controls = ({ onIncrement }) => {
  return (
    <ButtonBox>
      <Button type="button" id="1" onClick={onIncrement}>
        Good
      </Button>
      <Button type="button" id="2" onClick={onIncrement}>
        Neutral
      </Button>
      <Button type="button" id="3" onClick={onIncrement}>
        Bad
      </Button>
    </ButtonBox>
  );
};

export default Controls;
