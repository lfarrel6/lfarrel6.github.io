import styled from 'styled-components';

export const ThemeToggle = styled.div`
	border-radius: 50%;
	z-index: 10;
	background-color: ${({ theme }) => theme.inversePrimary};
	position: absolute;
	bottom: 50px;
	right: 50px;
	height: 30px;
	width: 30px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	transition: background-color linear 1.5s;
`;
