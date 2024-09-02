import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 574px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Color.Dark};
`;

export const Clue = styled.p`
  margin: 0 auto;
  margin-top: 32px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${Color.Secondary};
`;

export const AttentionMessage = styled.p`
  margin-bottom: 10px;
  color: ${Color.Error};
`;

export const StyledCustomLink = styled(Link)`
  font-family: Exo 2;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
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
