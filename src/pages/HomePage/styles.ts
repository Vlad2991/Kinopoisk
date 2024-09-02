import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const Container = styled.div`
  display: grid;
  place-items: center;
  @media screen and (min-width: 1440px) {
    padding-left: 238px;
  }
`;

export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  height: 40px;
  width: 161px;
  margin-top: 36px;
  padding: 8px 24px 8px 24px;
  border-radius: 40px;
  border: 1px solid ${Color.Border};
  background: ${Color.Graphite};
  color: ${Color.White};
  cursor: pointer;
  :hover {
    border: 1px solid ${Color.Primary};
  }
`;

export const Clue = styled(motion.p)`
  margin-top: 300px;
  font-family: Exo 2;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.Error};
  @media screen and (min-width: 768px) {
    padding-left: 238px;
  }
`;

export const EndMessage = styled.p`
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${Color.White};
`;
