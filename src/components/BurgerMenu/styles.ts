import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100vh;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  background: ${Color.Black};
`;

export const ToolBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 40px;
  margin-top: 20px;
`;

export const Title = styled.p`
  margin-left: 20px;
`;

export const CloseButton = styled.button`
  right: 0;
  padding: 10px;
  background: ${Color.Black};
  color: ${Color.White};
  cursor: pointer;
`;
