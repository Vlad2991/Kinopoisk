import styled from "styled-components";
import { Color } from "ui";

export const StyledInput = styled.input`
  width: 100%;
  max-height: 56px;
  margin-bottom: 24px;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${Color.Border};
  border-radius: 10px;
  background: ${Color.Graphite};
  color: ${Color.White};
  cursor: pointer;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: ${Color.Secondary};
  }
  &:focus {
    background: ${Color.Graphite};
    outline: 2px ${Color.Primary};
    outline-style: solid;
  }
  &:disabled {
    background-color: ${Color.Secondary};
    color: ${Color.Light};
  }
  &:invalid {
    outline: 2px ${Color.Error};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
