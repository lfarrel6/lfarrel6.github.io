import React from 'react';
import { NeumorphicCircle } from './neumorphic.styled';

function Neumorphic({children, ...dims}){
  return (
    <NeumorphicCircle {...dims}>
      {children}
    </NeumorphicCircle>
  );
}

export default Neumorphic;