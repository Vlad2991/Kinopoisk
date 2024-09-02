import { Button, Circle } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors";
import { useLayoutEffect } from "react";
import { setDarkMode } from "store/features";

export const Switch = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(getUserInfo);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark);
  }, [isDark]);

  return (
    <Button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setDarkMode());
      }}
      $isDark={isDark}
    >
      <Circle $isDark={isDark}></Circle>
    </Button>
  );
};