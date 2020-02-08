import styled from 'styled-components';

const SubtleLink = styled.a`
	text-decoration: underline;
	cursor: pointer;
	color: ${({ theme }) => theme.text};

	&:hover {
		color: ${({ theme }) => theme.text};
	}
`;

export default SubtleLink;
