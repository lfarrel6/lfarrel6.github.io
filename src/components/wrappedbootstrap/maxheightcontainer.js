import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const FluidContainer = ({ className, children, ...rest }) => (
  <Container fluid className={className} {...rest}>
    {children}
  </Container>
);

export const MaxHeightContainer = styled(Container)`
  min-height: 100vh;
`;

export const MaxHeightFluidContainer = styled(FluidContainer)`
  min-height: 100vh;
`;
