import { Portal } from "components";
import { Message, Wrapper } from "./styles";
import { PortalTarget } from "components/Portal";

interface IProps {
  toggle: () => void;
}

export const SettingsPageModal = ({ toggle }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <Wrapper
        onClick={() => {
          toggle();
        }}
      >
        <Message initial={{ y: -800 }} animate={{ y: 0 }} transition={{ delay: 0.3 }}>
          Your password was changed !
        </Message>
      </Wrapper>
    </Portal>
  );
};