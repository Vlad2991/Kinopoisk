import { css } from "styled-components";

export type Theme = "dark" | "light";

export const themeColors = css`
  html {
    --primary: #7b61ff;
    --secondary-light: #917cff;
    --secondary: #80858b;
    --black: #000000;
    --white: #ffffff;
    --light: #afb2b6;
    --dark: #101014;
    --graphite: #323537;
    --error: #ff5154;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
    --border: #323537;
  }
  html[data-theme="dark"] {
    --primary: #7b61ff;
    --secondary-light: #917cff;
    --secondary: #80858b;
    --black: #000000;
    --white: #ffffff;
    --light: #afb2b6;
    --dark: #101014;
    --graphite: #323537;
    --error: #ff5154;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
    --border: #323537;
  }
  html[data-theme="light"] {
    --primary: #7b61ff;
    --secondary-light: #917cff;
    --secondary: #80858b;
    --black: #ffffff;
    --white: #000000;
    --light: #afb2b6;
    --dark: #ffffff;
    --graphite: #ffffff;
    --error: #ff5154;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
    --border: #afb2b6;
  }
`;