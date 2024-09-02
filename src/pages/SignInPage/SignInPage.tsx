import { SignIn, SignInModal } from "components";
import { useToggle } from "hooks";

export const SignInPage = () => {
  const [state, toggle] = useToggle(false);
  return (
    <>
      <SignIn toggle={toggle} />
      {state && <SignInModal toggle={toggle} />}
    </>
  );
};
