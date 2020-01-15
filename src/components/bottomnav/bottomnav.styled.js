import styled from 'styled-components';

export const StickyBottomNav = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 64px;
	padding: 10px 0;

	display: flex;
	align-items: center;
	justify-content: space-around;

	background: ${({ theme }) => theme.bgLight};
`;

export const BottomNavOption = styled.div`
	margin: 0;
	border-radius: 10px;
	height: 45px;
	width: 100px;
	padding: 10px 0;
	background: ${({ theme }) => theme.bgLight};
	box-shadow: -2px -2px 2px 2px ${({ theme }) => theme.shadowLight},
		2px 2px 2px 2px ${({ theme }) => theme.shadowDark};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h6 {
		margin: 0;
		color: ${({ theme }) => theme.dark};
	}
`;
