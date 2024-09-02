import styled from "styled-components";
import { Color } from "ui";

export const Title = styled.h2`
  margin-bottom: 18px;
  font-family: Exo 2;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.White};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-family: Exo 2;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: ${Color.White};
  }
`;
