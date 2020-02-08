import React from 'react';
import { PaddedHeader } from './header.styled';

function Header({ children }) {
	return (
		<div>
			<PaddedHeader>{children}</PaddedHeader>
		</div>
	);
}

export default Header;
