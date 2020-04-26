import React, { StatelessComponent } from 'react';
import { SpacedSubtitle } from './subtitle.styled';

const Subtitle: StatelessComponent = ({ children }) => (
  <div>
    <SpacedSubtitle>{children}</SpacedSubtitle>
  </div>
);

export default Subtitle;