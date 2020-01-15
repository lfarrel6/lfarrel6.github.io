import styled from 'styled-components';

export const StickyTopNav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	background-color: ${({ theme }) => theme.dark};

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavHeader = styled.h2`
	color: ${({ theme }) => theme.bgLight};
	margin: 0;
`;
