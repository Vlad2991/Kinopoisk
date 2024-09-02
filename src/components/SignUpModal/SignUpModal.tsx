import { useNavigate } from "react-router-dom";
import { Portal } from "components";
import { ROUTE } from "routes";
import { Message, Wrapper } from "./styles";
import { PortalTarget } from "components/Portal";

interface IProps {
  toggle: () => void;
}

export const SignUpModal = ({ toggle }: IProps) => {
  const navigate = useNavigate();

  return (
    <Portal target={PortalTarget.MODAL}>
      <Wrapper
        onClick={() => {
          toggle();
          navigate(`${ROUTE.HOME}`);
        }}
      >
        <Message initial={{ y: -800 }} animate={{ y: 0 }} transition={{ delay: 0.3 }}>
          You are sign up !
        </Message>
      </Wrapper>
    </Portal>
  );
};
