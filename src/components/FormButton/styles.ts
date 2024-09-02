import styled from "styled-components";
import { Color } from "ui";

export const Button = styled.button`
  padding: 16px 0;
  margin-top: 40px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background: ${Color.Primary};
  color: ${Color.White};
  border-radius: 10px;
  cursor: pointer;
`;
