import { Title } from "./styles";

interface IProps {
  children: string;
}

export const FormTitle = ({ children }: IProps) => {
  return <Title children={children} />;
};
