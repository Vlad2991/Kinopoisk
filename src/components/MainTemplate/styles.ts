import styled from "styled-components";
import { Color } from "ui";

export const Container = styled.div`
  max-width: 1920px;
  padding: 40px 24px 48px;
  overflow-x: hidden;
  background: ${Color.Black};

  @media screen and (min-width: 768px) {
    padding: 40px 40px 48px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px 48px 152px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 176px 48px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 128px 48px;
  }

  @media screen and (min-width: 1920px) {
    padding: 40px 62px 48px;
  }
`;
