import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.h1`
  text-align: ${({ align }) => align || "center"};
`;
