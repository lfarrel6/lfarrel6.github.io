import React, { StatelessComponent } from 'react';
import { PaddedHeader } from './header.styled';

const Header: StatelessComponent = ({children}) => {
  return (
    <div>
      <PaddedHeader>{children}</PaddedHeader>
    </div>
  )
}

export default Header;