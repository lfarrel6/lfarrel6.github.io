import React from 'react';
import { StyledHeader } from './header.styled';

function Header({ children, ...rest }){
  return <StyledHeader {...rest}>{children}</StyledHeader>
}

export default Header;