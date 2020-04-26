import styled from 'styled-components';

export const StickyTopNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavHeader = styled.h4`
  text-decoration: underline;
  color: ${({ theme }) => theme.text};
  margin: 0;
  margin-right: 50px;
  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.toggleColor};
    transition: 0.2s all linear;
  }
`;