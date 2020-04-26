interface IDarkModeProps extends React.Props<any> {
  darkMode: boolean,
}

export interface IToggleProps extends IDarkModeProps{}

export interface ISwitchLabelProps extends IDarkModeProps {}

export interface IFabProps {
  mode: string,
  toggleTheme: () => void
}