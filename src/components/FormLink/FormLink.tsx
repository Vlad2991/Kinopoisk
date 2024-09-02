import { ReactNode } from "react";
import { StyledFormLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: string;
}

export const FormLink = ({ children, to }: IProps) => {
  return <StyledFormLink to={to} children={children} />;
};
