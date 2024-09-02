import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <Outlet /> : <Navigate to={`/${ROUTE.SIGN_IN}`} />;
};
