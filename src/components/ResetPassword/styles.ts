import styled from "styled-components";
import { Color } from "ui";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 574px;
  margin: 174px auto;
  background: ${Color.Dark};
  border-radius: 10px;
`;

export const AttentionMessage = styled.p`
  margin-bottom: 10px;
  color: ${Color.Error};
`;

export const InformationMessage = styled.p`
  margin-bottom: 40px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.White};
`;

export const Clue = styled.p`
  margin-top: 32px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${Color.Secondary};
  text-align: left;
`;
