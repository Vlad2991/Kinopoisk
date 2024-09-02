import { StylesConfig } from "react-select";
import styled from "styled-components";
import { IOption } from "types";
import { Color } from "ui";

export const Container = styled.div`
  display: grid;
  place-items: end;
`;

export const selectStyles: StylesConfig<IOption, boolean> = {
  control: (styles) => ({
    ...styles,
    width: "100px",
    marginBottom: "24px",
    minHeight: "30px",
    borderRadius: "10px",
    border: `1px solid ${Color.Border}`,
    borderColor: `${Color.Graphite}`,
    backgroundColor: `${Color.Graphite}`,
    cursor: "pointer",
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: "16px 5px",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: `${Color.White}`,
    border: `1px solid ${Color.Graphite}`,
    borderRadius: "10px",
  }),

  singleValue: (styles) => ({
    ...styles,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: `${Color.White}`,
  }),

  indicatorsContainer: (styles) => ({
    ...styles,
    div: {
      padding: "0px 5px",
    },
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),

  menu: (styles) => ({
    ...styles,
    overflow: "hidden",
    backgroundColor: `${Color.Graphite}`,
    borderRadius: "10px",
  }),

  option: (styles, state) => ({
    ...styles,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: state.isFocused ? `${Color.SecondaryLight}` : `${Color.White}`,
    backgroundColor: state.isFocused ? `${Color.Graphite}` : `${Color.Dark}`,
    cursor: "pointer",
  }),
};
