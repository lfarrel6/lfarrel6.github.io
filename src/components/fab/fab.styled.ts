import styled, { css } from 'styled-components';
import { ISwitchLabelProps, IToggleProps } from './fab.types';

export const Toggle = styled.div`
  width: 25px;
  height: ${(props: IToggleProps) => props.darkMode ? '12.5px' : '25px' };
  border-radius: ${(props: IToggleProps) => props.darkMode ? '25px 25px 0 0' : '25px'};
  background-color: ${({theme}) => theme.toggleColor};
  position: absolute;
  left: 3px;
  transition: 0.6s all linear;
  ${(props: IToggleProps) => toggleTheme(props.darkMode)}
  margin-top: ${(props: IToggleProps) => props.darkMode ? '8px' : '2px'};
`;

const toggleTheme = (darkMode: boolean) => darkMode && css`
  transform: scale(0.9) translateX(75px) rotate(90deg);
  background: transparent;
  box-shadow: 0px -6px 0 0 ${({theme}) => theme.toggleColor};
`;

const switchLabelTheme = (darkMode: boolean) => darkMode && css `
  transition: 1s all linear;
  border: none;
`;

export const SwitchLabel = styled.label`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: 1s all linear;

  ${(props: ISwitchLabelProps) => switchLabelTheme(props.darkMode)}
  ${({ theme }) => `
    background: ${theme.primary};
    border: 1px solid ${theme.toggleColor};
  `}
`;

export const HiddenSwitch = styled.input`
  visibility: hidden;
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  padding: 5px;
	display: flex;
	align-items: center;
  justify-content: center;
  z-index: 10;
`;