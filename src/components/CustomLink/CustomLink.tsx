import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { StyledCustomLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: string;
  onClick?: () => void;
}

export const CustomLink = ({ children, to, onClick }: IProps) => {
  const isActive = useMatch(to);

  return <StyledCustomLink $isActive={!isActive} to={to} children={children} onClick={onClick} />;
};
