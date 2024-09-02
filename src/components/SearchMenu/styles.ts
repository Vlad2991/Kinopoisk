import { StylesConfig } from "react-select";
import styled from "styled-components";
import { IOption } from "types";
import { Color } from "ui";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 3;
  height: 100vh;
  max-width: 1920px;
  width: 100%;
  padding-right: 24px;

  @media screen and (min-width: 768px) {
    padding-right: 40px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 48px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 176px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 128px;
  }

  @media screen and (min-width: 1920px) {
    padding-right: 62px;
  }
`;

export const Container = styled.div`
  display: grid;
  z-index: 2;
  height: 100vh;
  width: 100%;
`;

export const FilterForm = styled.form`
  display: grid;
  justify-self: end;
  padding: 40px;
  height: 100vh;
  width: 100%;
  background-color: ${Color.Black};

  @media screen and (min-width: 768px) {
    max-width: 550px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: Exo 2;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  color: ${Color.White};
`;

export const CloseButton = styled.button`
  right: 0;
  padding: 10px;
  background: ${Color.Black};
  color: ${Color.White};
  cursor: pointer;
`;

export const ShowResultsButton = styled.button`
  justify-self: end;
  width: 100%;
  height: 56px;
  padding: 16px 0;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const AttentionMessage = styled.p`
  margin-top: 10px;
  color: ${Color.Error};
`;

export const selectStyles: StylesConfig<IOption, boolean> = {
  control: (styles) => ({
    ...styles,
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
