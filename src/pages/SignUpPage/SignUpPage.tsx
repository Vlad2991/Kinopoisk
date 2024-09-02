import { SignUp, SignUpModal } from "components";
import { useToggle } from "hooks";

export const SignUpPage = () => {
  const [state, toggle] = useToggle(false);

  return (
    <>
      <SignUp toggle={toggle} />

      {state && <SignUpModal toggle={toggle} />}
    </>
  );
};
