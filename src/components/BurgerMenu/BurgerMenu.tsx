import { CustomLink } from "components";
import { ToolBar, Title, Wrapper, CloseButton } from "./styles";
import { HomeIcon, FavoritesIcon, SettingsIcon, TrendsIcon, CloseIcons } from "assets/index";
import { ROUTE } from "routes";
import { Color } from "ui";
import { AnimatePresence } from "framer-motion";

interface IProps {
  setToggle: () => void;
  toggle: boolean;
}

export const BurgerMenu = ({ setToggle, toggle }: IProps) => {
  return (
    <AnimatePresence>
      {toggle && (
        <Wrapper
          animate={{ x: 0 }}
          initial={{ x: 300 }}
          transition={{ delay: 0.3 }}
          exit={{ x: 550 }}
        >
          <CloseButton onClick={() => setToggle()}>
            <CloseIcons stroke={Color.White} />
          </CloseButton>
          <ToolBar>
            <CustomLink onClick={() => setToggle()} to={ROUTE.HOME}>
              <HomeIcon width={24} /> <Title>Home</Title>
            </CustomLink>
            <CustomLink onClick={() => setToggle()} to={ROUTE.TRENDS}>
              <TrendsIcon width={24} />
              <Title>Trends</Title>
            </CustomLink>
            <CustomLink onClick={() => setToggle()} to={ROUTE.FAVORITES}>
              <FavoritesIcon width={24} />
              <Title>Favorites</Title>
            </CustomLink>
            <CustomLink onClick={() => setToggle()} to={ROUTE.SETTINGS}>
              <SettingsIcon width={24} />
              <Title>Settings</Title>
            </CustomLink>
          </ToolBar>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
