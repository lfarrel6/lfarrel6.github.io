import React, { StatelessComponent } from 'react';
import { StickyTopNav, NavHeader } from './topnav.styled';

const TopNav: StatelessComponent = () => {
  return (
    <StickyTopNav>
      <NavHeader>Blog</NavHeader>
    </StickyTopNav>
  )
}

export default TopNav;