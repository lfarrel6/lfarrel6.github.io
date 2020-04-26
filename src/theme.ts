export interface ITheme {
  text: string,
  primary: string,
  inversePrimary: string,
  shadowLight: string,
	shadowDark: string,
	toggleColor: string
}

export interface IThemeObject {
  [index: string]: ITheme,
  dark: ITheme,
  light: ITheme
}

export const theme: IThemeObject = {
  dark: {
		text: '#fffff2',
		primary: '#0d0d0d',
		inversePrimary: '#fffff2',
		shadowLight: 'rgba(255,255,255,0.5)',
		shadowDark: 'rgba(209,205,199,0.5)',
		toggleColor: '#04ADBE',
	},
	light: {
		text: '#0d0d0d',
		primary: '#fffff2',
		inversePrimary: '#0d0d0d',
		shadowLight: 'rgba(255,255,255,0.5)',
		shadowDark: 'rgba(209,205,199,0.5)',
		toggleColor: '#FF3686',
	},
}