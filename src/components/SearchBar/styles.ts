import styled from "styled-components";
import { Color } from "ui/";

export const Wrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "logo burger"
    "search search";
  padding: 40px 24px 5px;
  background: ${Color.Black};

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 40px 40px 56px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px 48px 56px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 176px 56px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 128px 56px;
  }

  @media screen and (min-width: 1920px) {
    padding: 40px 62px 56px;
  }
`;

export const LogoIcon = styled.img`
  grid-area: logo;
  margin-right: 0;
  @media screen and (min-width: 768px) {
    margin-right: 78px;
  }
  @media screen and (min-width: 1024x) {
    margin-right: 78px;
  }
`;

export const Input = styled.input`
  max-width: 1184px;
  width: 100%;
  max-height: 56px;
  margin-bottom: 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${Color.Border};
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-right: 0px;
  font-weight: 500;
  font-size: 16px;
  background: ${Color.Graphite};
  color: ${Color.White};
  cursor: pointer;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: ${Color.Secondary};
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
  &:focus {
    background: ${Color.Graphite};
    outline: none;
    outline-style: none;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  grid-area: burger;
  justify-self: end;
  max-width: 267px;
  width: 100%;
  height: 56px;
  margin-left: 42px;
  margin-bottom: 0;
`;

export const UserName = styled.p`
  height: 56px;
  width: 56px;
  padding: 16px;
  border-radius: 10px;
  font-family: Exo 2;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.05em;
  background-color: ${Color.Primary};
  color: ${Color.White};
`;

export const UserNavigate = styled.div`
  padding: 16px;
  color: ${Color.White};
`;

export const BurgerButton = styled.button`
  grid-area: burger;
  justify-self: end;
  max-width: 56px;
  width: 100%;
  height: 56px;
  margin-bottom: 32px;
  border-radius: 10px;
  background: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-bottom: 0;
  }
`;

export const SearchButton = styled.button`
  grid-area: searchFilter;
  justify-self: end;
  max-width: 56px;
  width: 100%;
  height: 56px;
  border: 1px solid ${Color.Border};
  border-left: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background: ${Color.Graphite};
  color: ${Color.White};
  cursor: pointer;
`;

export const Container = styled.div`
  grid-area: search;
  display: flex;
  width: 100%;
`;
