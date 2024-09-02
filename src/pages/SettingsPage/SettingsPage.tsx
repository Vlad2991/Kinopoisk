import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormSubTitle, FormTitle, Input, SettingsPageModal, Switch } from "components";
import { useToggle } from "hooks";
import { ROUTE } from "routes";
import { getUserInfo } from "store/selectors";
import {
  AttentionMessage,
  ButtonsBlock,
  CancelButton,
  ColorModeBlock,
  Description,
  Form,
  Part,
  PasswordBlock,
  ProfileBlock,
  SaveButton,
  Title,
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { updateUserPassword } from "store/features";
import { useState } from "react";

type SettingValues = {
  userName: string;
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
  newPassword: string;
};

export const SettingsPage = () => {
  const { email, name } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const [state, toggle] = useToggle(false);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<SettingValues>();

  const { newPassword, confirmPassword } = watch();

  const onSubmit: SubmitHandler<SettingValues> = ({
    newPassword,
    confirmPassword,
    userPassword,
  }) => {
    if (newPassword === confirmPassword) {
      dispatch(
        updateUserPassword({
          userEmail: email,
          newPassword: newPassword,
          userPassword: userPassword,
        }),
      )
        .unwrap()
        .then(() => {
          toggle();
        })
        .catch((err) => {
          setErrorMessage(err);
        })
        .finally(() => {
          reset();
        });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Profile</FormTitle>
        <ProfileBlock>
          <Part>
            <FormSubTitle>Name</FormSubTitle>
            <Controller
              control={control}
              name="userName"
              render={({ field: { onChange } }) => (
                <Input
                  onChange={onChange}
                  value={name.toUpperCase()}
                  placeholder="Your name"
                  type="text"
                />
              )}
            />
            {errors.userName && (
              <AttentionMessage>{errors.userName.message?.toString()}</AttentionMessage>
            )}
          </Part>

          <Part>
            <FormSubTitle>Email</FormSubTitle>
            <Controller
              control={control}
              name="userEmail"
              render={({ field: { onChange } }) => (
                <Input onChange={onChange} value={email} placeholder="Your email" type="text" />
              )}
            />
            {errors.userEmail && (
              <AttentionMessage>{errors.userEmail.message?.toString()}</AttentionMessage>
            )}
          </Part>
        </ProfileBlock>
        <FormTitle>Password</FormTitle>
        <PasswordBlock>
          <Part>
            <FormSubTitle>Password</FormSubTitle>
            <Controller
              control={control}
              name="userPassword"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must contain at least 6 characters",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z]).{6,}/,
                  message: "Password must contain and at least 6 or more characters",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="Your password"
                  type="password"
                />
              )}
            />
            {errors.userPassword && (
              <AttentionMessage>{errors.userPassword.message?.toString()}</AttentionMessage>
            )}
            {errorMessage && <AttentionMessage>{errorMessage}</AttentionMessage>}
          </Part>
          <Part>
            <FormSubTitle>New password</FormSubTitle>
            <Controller
              control={control}
              name="newPassword"
              rules={{
                required: "Enter your new password",
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="New password"
                  type="password"
                />
              )}
            />
            {errors.newPassword && (
              <AttentionMessage>{errors.newPassword.message?.toString()}</AttentionMessage>
            )}
          </Part>

          <Part>
            <FormSubTitle>Confirm password</FormSubTitle>

            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: "Confirm your new password",
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="Confirm password"
                  type="password"
                />
              )}
            />
            {errors.confirmPassword && (
              <AttentionMessage>{errors.confirmPassword.message?.toString()}</AttentionMessage>
            )}
            {newPassword !== confirmPassword && (
              <AttentionMessage>Passwords don't match</AttentionMessage>
            )}
          </Part>
        </PasswordBlock>

        <FormTitle>Color mode</FormTitle>

        <ColorModeBlock>
          <Part>
            <Title>Dark</Title>
            <Description>Use dark theme</Description>
          </Part>
          <Switch />
        </ColorModeBlock>

        <ButtonsBlock>
          <CancelButton onClick={() => navigate(`${ROUTE.HOME}`)}>Cancel</CancelButton>
          <SaveButton type="submit">Save</SaveButton>
        </ButtonsBlock>
      </Form>

      {state && <SettingsPageModal toggle={toggle} />}
    </>
  );
};
