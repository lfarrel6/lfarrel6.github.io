import React from 'react';
import './App.css';

import {
	MaxHeightFluidContainer,
	MaxHeightRow,
	Background,
	NeuSmiley,
	TopNav,
	BottomNav,
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
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<MaxHeightFluidContainer>
					<TopNav />
					<BottomNav />
					<MaxHeightRow>
						<NeuBackground />
					</MaxHeightRow>
				</MaxHeightFluidContainer>
			</Router>
		</ThemeProvider>
	);
}

export default App;
