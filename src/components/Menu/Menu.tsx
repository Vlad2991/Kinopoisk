import { CustomLink } from "components";
import { ToolBar, Footer, Title } from "./styles";
import { HomeIcon, FavoritesIcon, SettingsIcon, TrendsIcon } from "assets/index";
import { ROUTE } from "routes";

export const Menu = () => {
  return (
    <ToolBar>
      <CustomLink to={ROUTE.HOME}>
        <HomeIcon width={24} /> <Title>Home</Title>
      </CustomLink>
      <CustomLink to={ROUTE.TRENDS}>
        <TrendsIcon width={24} />
        <Title>Trends</Title>
      </CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>
        <FavoritesIcon width={24} />
        <Title>Favorites</Title>
      </CustomLink>
      <CustomLink to={ROUTE.SETTINGS}>
        <SettingsIcon width={24} />
        <Title>Settings</Title>
      </CustomLink>
      <Footer>© All Rights Reserved</Footer>
    </ToolBar>
  );
};
