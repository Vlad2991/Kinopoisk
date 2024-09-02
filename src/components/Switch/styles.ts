import styled from "styled-components";
import { Color } from "ui";
import { Theme } from "ui/theme";

export const Button = styled.button<{ $isDark: Theme }>`
  height: 20px;
  width: 32px;
  border-radius: 10px;
  border: none;
  background-color: ${({ $isDark }) => ($isDark === "dark" ? Color.Primary : Color.Secondary)};
  cursor: pointer;
  &:hover {
    background-color: ${({ $isDark }) => ($isDark === "dark" ? Color.SecondaryLight : Color.Light)};
  }
`;

export const Circle = styled.div<{ $isDark: Theme }>`
  position: relative;
  top: 0px;
  left: ${({ $isDark }) => ($isDark === "dark" ? "2px" : "14px")};
  background-color: ${Color.White};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  &:disabled {
    background-color: ${({ $isDark }) => ($isDark === "dark" ? Color.SecondaryLight : Color.Light)};
  }
`;