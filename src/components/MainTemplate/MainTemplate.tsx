import { Outlet } from "react-router-dom";
import { Menu, SearchBar } from "components";
import { useWindowSize } from "hooks";
import { Container } from "./styles";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();

  return (
    <>
      <SearchBar />
      <Container>
        {width >= 1440 && <Menu />}
        <Outlet />
      </Container>
    </>
  );
};
