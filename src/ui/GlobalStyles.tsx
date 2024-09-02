import { createGlobalStyle } from "styled-components";
import { themeColors } from "./theme";
import { Color } from "./colors";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
${reset}
${themeColors}
body {
  font-family: "Exo 2", Arial, Helvetica, sans-serif;
  background: ${Color.Black};
}
`;