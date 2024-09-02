import { Button } from "./styles";

interface IProps {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const FormButton = ({ children, type }: IProps) => {
  return <Button type={type} children={children} />;
};
