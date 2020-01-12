import React from 'react';
import NeumorphicCircle from '../neumorphic';
import { Smiley } from './neusmiley.styled';

function NeuSmiley(dims){
  return (
    <NeumorphicCircle {...dims}>
      {Smiley}
    </NeumorphicCircle>
  )
}

export default NeuSmiley;