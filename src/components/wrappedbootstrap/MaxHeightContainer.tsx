import React, { SFC, ReactNode } from 'react';
import { Container, ContainerProps } from 'react-bootstrap';
import styled from 'styled-components';

interface IFluidProps {
  className?: string,
  children?: ReactNode,
  type?: string,
  key?: string
}

const FluidContainer: SFC<IFluidProps & ContainerProps> = ({ className, children }): any => {
  return <Container fluid className={className}>{children}</Container>;
}

export const MaxHeightContainer = styled(Container)`
  height: 100%;
`;

export const MaxHeightFluidContainer = styled(FluidContainer)`
  height: 100vh;
  background-color: ${({theme}) => theme.primary};
  display: flex;
  align-items: center;
  transition: background-color linear 1s;
`;