import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "ui";
import { notFound } from "assets";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  background: no-repeat top url(${notFound});
  background-color: ${Color.White};
  background-size: 50%;
`;

export const HomeLink = styled(Link)`
  cursor: pointer;
`;
