import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const StyledCustomLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  font-family: Exo 2;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
  fill: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
  stroke: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};

  :hover {
    color: ${Color.SecondaryLight};
    fill: ${Color.SecondaryLight};
    stroke: ${Color.SecondaryLight};
  }
  &:active {
    color: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
    fill: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)} !important;
    stroke: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
  }
  &:disabled {
    color: ${Color.Light};
    fill: ${Color.Light} !important;
    stroke: ${Color.Light};
  }
`;
