import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, FormLink, FormSubTitle, FormTitle, Input } from "components";
import { useToggle } from "hooks";
import { ROUTE } from "routes";
import { AttentionMessage, Clue, Form, InformationMessage } from "./styles";
import { resetPassword } from "store/features";
import { useAppDispatch } from "store/hooks";
import { useState } from "react";

type FormValues = {
  userEmail: string;
};

export const ResetPassword = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isToggleMode, setIsToggleMode] = useToggle();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({ userEmail }) => {
    dispatch(resetPassword({ userEmail }))
      .unwrap()
      .then(() => {
        setIsToggleMode();
      })
      .catch((err) => {
        setErrorMessage(err);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Reset password</FormTitle>
        {isToggleMode && (
          <InformationMessage>
            You will receive an email a link to reset your password!
          </InformationMessage>
        )}

        <FormSubTitle>Email</FormSubTitle>
        <Controller
          control={control}
          name="userEmail"
          rules={{
            required: "Email is required",
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              message: "Please insert a valid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your email" type="text" />
          )}
        />
        <Clue>
          Return to <FormLink to={`/${ROUTE.SIGN_IN}`}>Sign In</FormLink>
        </Clue>

        {errors.userEmail && (
          <AttentionMessage>{errors.userEmail.message?.toString()}</AttentionMessage>
        )}
        {errorMessage && <AttentionMessage>{errorMessage}</AttentionMessage>}

        <FormButton type="submit">Reset</FormButton>
      </Form>
    </>
  );
};
