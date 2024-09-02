import { css } from "styled-components";

export const reset = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    line-height: 1.15;
    box-sizing: border-box;
  }
  main {
    display: block;
  }
  ul {
    list-style-type: none;
  }
  li {
    text-transform: none;
  }
  a {
    background-color: transparent;
    text-decoration: none;
  }
  abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  code,
  kbd,
  samp,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: inherit;
  }
  button {
    overflow: visible;
    text-transform: none;
    border: none;
  }
  input {
    overflow: visible;
  }
  fieldset {
    border: 1px solid currentColor;
    margin: 0 2px;
  }
  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }
  progress {
    display: inline-block;
    vertical-align: baseline;
  }
  select {
    text-transform: none;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  [type="search"] {
    -webkit-appearance: textfield;
  }
  [type="color"] {
    background: inherit;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  ::-webkit-input-placeholder {
    color: inherit;
  }
  ::-webkit-search-decoration,
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  ::-moz-focus-inner {
    border: 0;
  }
  :-moz-focusring {
    outline: none;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    color: inherit;
    overflow: visible;
  }
  b,
  strong {
    font-weight: bolder;
  }
  audio,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  table {
    text-indent: 0;
    border-color: inherit;
  }
  details {
    display: block;
  }
  dialog {
    background-color: inherit;
    border: solid;
    color: inherit;
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: fit-content;
  }
  dialog:not([open]) {
    display: none;
  }
  summary {
    display: list-item;
  }
  canvas {
    display: inline-block;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
  list-style-type: none;
`;