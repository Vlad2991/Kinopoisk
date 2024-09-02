import { Route, Routes } from "react-router-dom";
import { AuthTemplate, MainTemplate, RequireAuth } from "components";
import {
  ErrorPage,
  FavoritesPage,
  HomePage,
  MoviePage,
  ResetPasswordPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "pages";
import { ROUTE } from "routes";

export const App = () => {
  return (
    <Routes>
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.HOME} element={<RequireAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      </Route>
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.MOVIE} element={<MoviePage />} />
    </Route>
    <Route path={ROUTE.HOME} element={<AuthTemplate />}>
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.RESET} element={<ResetPasswordPage />} />
    </Route>
    <Route path={ROUTE.NOT_FOUND} element={<ErrorPage />} />
  </Routes>
  );
};