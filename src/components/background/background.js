import React from "react";
import { StyledBackground } from "./background.styled";

function Background({ children }) {
  return <StyledBackground>{children}</StyledBackground>;
}

export default Background;
