import styled from "styled-components";
import { Color } from "ui";

export const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
`;
export const Element = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 10px;
  height: 5px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${Color.White} transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;