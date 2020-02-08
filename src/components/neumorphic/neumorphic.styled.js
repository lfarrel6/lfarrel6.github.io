import styled from 'styled-components';

export const NeumorphicCircle = styled.div`
	display: inline-block;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.bgLight};
	height: ${({ height }) => (height ? height : '50px')};
	width: ${({ width }) => (width ? width : '50px')};
	box-shadow: -2px -2px 4px 4px ${({ theme }) => theme.shadowLight},
		2px 2px 4px 4px ${({ theme }) => theme.shadowDark};
`;
