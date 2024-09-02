import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const Message = styled(motion.p)`
  font-family: Exo 2;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.White};
`;
