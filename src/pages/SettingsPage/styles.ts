import styled from "styled-components";
import { Color } from "ui";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1186px;
  padding: 0;
  background: ${Color.Black};
  @media screen and (min-width: 1440px) {
    padding-left: 238px;
    max-width: 1920px;
  }
`;

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 10px;
  background: ${Color.Dark};
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 40px 0 40px 40px;
    margin-bottom: 40px;
  }
`;

export const PasswordBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 10px;
  background: ${Color.Dark};
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 40px 0 40px 40px;
    margin-bottom: 40px;
  }
`;

export const ColorModeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 10px;
  background: ${Color.Dark};
`;

export const ButtonsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-template-areas:
    "save"
    "cancel";
  border-radius: 10px;
  background: ${Color.Black};
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "cancel save";
    grid-gap: 45px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: end;
    grid-template-areas: "cancel save";
    grid-gap: 0px;
  }
`;

export const Part = styled.p`
  margin-right: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 4px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.White};
`;

export const Description = styled.h2`
  margin-bottom: 4px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.Light};
`;

export const AttentionMessage = styled.p`
  margin-bottom: 10px;
  color: ${Color.Error};
`;

export const CancelButton = styled.button`
  grid-area: cancel;
  max-width: 270px;
  width: 100%;
  padding: 16px 0;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.White};
  background: ${Color.Graphite};
  border: 1px solid ${Color.Border};
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-width: 320px;
  }
`;

export const SaveButton = styled.button`
  grid-area: save;
  max-width: 270px;
  width: 100%;
  padding: 16px 0;
  margin-bottom: 16px;
  font-family: Exo 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    max-width: 320px;
  }
`;
