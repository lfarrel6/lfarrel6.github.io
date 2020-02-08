import React from 'react';
import { SpacedSubtitle } from './subtitle.styled';

function Subtitle({ children }) {
	return (
		<div>
			<SpacedSubtitle>{children}</SpacedSubtitle>
		</div>
	);
}

export default Subtitle;
