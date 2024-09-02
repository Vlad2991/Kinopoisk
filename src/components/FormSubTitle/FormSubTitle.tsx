import React from "react";
import { Description } from "./styles";

interface IProps {
  children: string;
}

export const FormSubTitle = ({ children }: IProps) => {
  return <Description children={children} />;
};
