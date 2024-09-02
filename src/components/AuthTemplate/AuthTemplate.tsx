import { Outlet } from "react-router-dom";
import { Wrapper } from "./styles";

export const AuthTemplate = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
