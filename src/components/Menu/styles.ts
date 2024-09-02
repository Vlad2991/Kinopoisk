import styled from "styled-components";
import { Color } from "ui";

export const ToolBar = styled.div`
  position: fixed;
  z-index: 1;
  display: grid;
  align-items: start;
  grid-gap: 40px;
`;

export const Footer = styled.span`
  position: fixed;
  z-index: 1;
  bottom: 0;
  margin-bottom: 20px;
  color: ${Color.White};
`;

export const Title = styled.p`
  margin-left: 20px;
`;
