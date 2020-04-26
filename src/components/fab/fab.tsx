import React, { FunctionComponent } from 'react';
import { Toggle, SwitchLabel, HiddenSwitch, Wrapper } from './fab.styled';
import { IFabProps } from './fab.types';

// Adapted from this pen by @sashatran on codepen: https://codepen.io/sashatran/pen/vzRjZr

const FAB: FunctionComponent<IFabProps> = ({ mode, toggleTheme }) => {
  return (
  <Wrapper>
    <HiddenSwitch type="checkbox" id="switch" onClick={toggleTheme}/>
    <SwitchLabel htmlFor="switch" darkMode={mode === 'dark'}>
      <Toggle darkMode={mode === 'dark'} />
    </SwitchLabel>
  </Wrapper>);
}

export default FAB;