import styled from "styled-components";
import { motion } from "framer-motion";
import { Color } from "ui";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1493px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: minmax(auto, 208px) minmax(auto, 878px);
    grid-template-rows: auto;
    grid-template-areas:
      "moviePoster type"
      "moviePoster title"
      "moviePoster ratingBoard"
      "moviePoster filmPlot"
      "buttons description"
      ". description";
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: minmax(266px, 272px) minmax(auto, 878px);
    padding-left: 238px;
  }
`;

export const Type = styled.span`
  grid-area: type;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.Light};
  @media screen and (min-width: 768px) {
    justify-self: start;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  margin-bottom: 20px;
  font-family: Exo 2;
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.White};
  @media screen and (min-width: 768px) {
    justify-self: start;
    margin-bottom: 0;
  }
`;

export const RatingBoard = styled.p`
  display: grid;
  grid-area: ratingBoard;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 229px;
  width: 100%;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Rating = styled.p`
  height: 28px;
  width: 37px;
  padding: 4px;
  font-size: 14px;
  text-align: center;
  background: ${Color.Green};
  color: ${Color.White};
  border-radius: 6px;
`;

export const RatingImdb = styled.p`
  width: 79px;
  padding: 4px;
  font-family: Exo 2;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background: ${Color.Graphite};
  color: ${Color.White};
  border-radius: 6px;
`;

export const Runtime = styled.p`
  width: 73px;
  padding: 4px;
  font-family: Exo 2;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background: ${Color.Graphite};
  color: ${Color.White};
  border-radius: 6px;
`;

export const MoviePoster = styled.img`
  grid-area: moviePoster;
  height: 356px;
  max-width: 272px;
  width: 100%;
  margin-bottom: 24px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    max-width: 208px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    height: 357px;
    max-width: 272px;
  }
`;

export const Buttons = styled.div<{ $isAddToFavorites: boolean }>`
  grid-area: buttons;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  height: 56px;
  max-width: 272px;
  width: 100%;
  border: 1px solid ${Color.Border};
  border-radius: 16px;
  background: ${Color.Graphite};
  color: ${({ $isAddToFavorites }) => ($isAddToFavorites ? Color.Primary : Color.Secondary)};
  fill: ${({ $isAddToFavorites }) => ($isAddToFavorites ? Color.Primary : Color.Secondary)};
  stroke: ${({ $isAddToFavorites }) => ($isAddToFavorites ? Color.Primary : Color.Secondary)};
  cursor: pointer;
  :hover {
    color: ${Color.SecondaryLight};
    fill: ${Color.SecondaryLight};
    stroke: ${Color.SecondaryLight};
  }
  &:active {
    color: ${Color.Primary};
    fill: ${Color.Primary};
    stroke: ${Color.Primary};
  }
  &:disabled {
    color: ${Color.Light};
    fill: ${Color.Light};
    stroke: ${Color.Light};
  }
  @media screen and (min-width: 768px) {
    max-width: 208px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 272px;
  }
`;

export const FilmPlot = styled.p`
  grid-area: filmPlot;
  max-width: 272px;
  margin-bottom: 32px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${Color.White};
  @media screen and (min-width: 768px) {
    max-width: 600px;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: description;
  max-width: 272px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Year = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const Released = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;
export const BoxOffice = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const Country = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const Production = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const Actors = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const Director = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const Writers = styled.span`
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const SwiperContainer = styled.div`
  max-width: 1184px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 240px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 544px;
  }
`;
