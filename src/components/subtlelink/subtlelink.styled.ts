import styled from 'styled-components';

export default styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.toggleColor};
    transition: 0.2s all linear;
  }
`;