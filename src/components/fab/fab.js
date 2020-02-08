import React from 'react';
import { ThemeToggle } from './fab.styled';

const Moon = () => <>&#x1F319;</>;
const Sun = () => <>&#x1F31E;</>;

function FAB({ darkMode, ...rest }) {
	return <ThemeToggle {...rest}>{darkMode ? <Sun /> : <Moon />}</ThemeToggle>;
}

export default FAB;
