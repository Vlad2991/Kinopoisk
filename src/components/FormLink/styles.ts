import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const StyledFormLink = styled(Link)`
  border-bottom: 3px solid ${Color.Secondary};
  font-family: Exo 2;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.Secondary};
  :hover {
    color: ${Color.SecondaryLight};
    fill: ${Color.SecondaryLight};
  }
  &:active {
    color: ${Color.Primary};
    fill: ${Color.Primary};
  }
  &:disabled {
    color: ${Color.Light};
    fill: ${Color.Light};
  }
`;
