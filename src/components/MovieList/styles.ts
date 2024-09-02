import styled from "styled-components";
import { Color } from "ui";

export const StyledMovieList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${Color.White};

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(208px, 266px));
    grid-template-rows: auto;
    grid-gap: 32px;
  }

  @media screen and (min-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-column: 2/3;
    grid-gap: 50px;
    padding-left: 238px;
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(5, 266px);
    grid-gap: 40px;
  }
`;

export const Message = styled.div`
  color: ${Color.Error};
  background: ${Color.Black};
`;
