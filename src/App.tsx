import React, { FC, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { useDarkMode } from './hooks';
import { 
	MaxHeightFluidContainer,
	TopNav,
	PaddedDiv,
	Header,
	Subtitle,
	SubtleLink,
	FAB
} from './components';

const updateFavicon = (theme: string): void => {
	const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = `./favicon.${theme}.ico`;
	document.getElementsByTagName('head')[0].appendChild(link);
}

const App: FC = () => {
	const [mode, toggleTheme] = useDarkMode();
	const [statefulTheme, setTheme] = useState(theme[mode]);

	useEffect(() => {
		updateFavicon(mode);
		setTheme(theme[mode]);
	}, [mode]);

	return (
		<ThemeProvider theme={statefulTheme} >
			<MaxHeightFluidContainer>
				<TopNav />
				<PaddedDiv>
					<Header>Hi, I'm Liam</Header>
					<Subtitle>
						I'm a product-minded engineer.
						<br />
						I'm working for evervault to make data privacy simple and 
						accessible for all.
						<br />
						If that sounds like something that would interest you, check out
						our{' '}
						<SubtleLink target="_blank" href="https://evervault.com/careers">careers page</SubtleLink>.
					</Subtitle>
				</PaddedDiv>
				<FAB mode={mode} toggleTheme={toggleTheme} />
			</MaxHeightFluidContainer>
		</ThemeProvider>
	);
};

export default App;