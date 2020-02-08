import React, { useState, useEffect } from 'react';
import './App.css';

import {
	MaxHeightFluidContainer,
	Background,
	NeuSmiley,
	Header,
	Subtitle,
	SubtleLink,
	PaddedDiv,
	FAB,
} from './components';

import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

const NeuBackground = () => {
	return (
		<Background>
			<NeuSmiley height='300px' width='300px' />
		</Background>
	);
};

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [statefulTheme, setTheme] = useState(theme.light);

	useEffect(() => setTheme(theme[darkMode ? 'dark' : 'light']), [darkMode]);

	return (
		<ThemeProvider theme={statefulTheme}>
			<Router>
				<MaxHeightFluidContainer>
					<PaddedDiv>
						<Header>Hey, I'm Liam.</Header>
						<Subtitle>
							I'm a product-minded engineer.
							<br />
							I'm working at evervault to make data privacy simple and
							accessible for all.
							<br />
							If that sounds like something that would interest you, check out
							our{' '}
							<SubtleLink href='https://evervault.com/careers'>
								careers page
							</SubtleLink>
							.
						</Subtitle>
					</PaddedDiv>
					<FAB onClick={() => setDarkMode(!darkMode)} darkMode={darkMode} />
				</MaxHeightFluidContainer>
			</Router>
		</ThemeProvider>
	);
}

export default App;
