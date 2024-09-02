import { ROUTE } from "routes";
import { HomeLink, Wrapper } from "./styles";

export const ErrorPage = () => {
  return (
    <HomeLink to={ROUTE.HOME}>
      <Wrapper />
    </HomeLink>
  );
};
