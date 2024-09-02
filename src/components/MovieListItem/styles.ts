import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const Movie = styled(motion.li)`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  margin-bottom: 32px;
`;

export const MoviePoster = styled.img`
  height: 357px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const CustomLink = styled(Link)`
  font-family: Exo 2;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Graphite};
`;

export const Title = styled.span`
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${Color.Secondary};

  :hover {
    color: ${Color.Primary};
    fill: ${Color.Primary};
  }
  &:active {
    color: ${Color.Dark};
    fill: ${Color.Dark};
  }
  &:disabled {
    color: ${Color.Light};
    fill: ${Color.Light};
  }
`;

export const Released = styled.span`
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${Color.Light};
`;
