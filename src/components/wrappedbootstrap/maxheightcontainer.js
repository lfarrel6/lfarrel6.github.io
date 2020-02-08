import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const FluidContainer = ({ className, children, ...rest }) => (
	<Container fluid className={className} {...rest}>
		{children}
	</Container>
);

export const MaxHeightContainer = styled(Container)`
	height: 100%;
`;

export const MaxHeightFluidContainer = styled(FluidContainer)`
	height: 100vh;
	background-color: ${({ theme }) => theme.primary};
	display: flex;
	align-items: center;
	transition: background-color linear 1s;
`;
