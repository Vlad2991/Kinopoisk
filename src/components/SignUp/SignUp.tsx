import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, FormLink, FormSubTitle, FormTitle, Input, LoadingSpinner } from "components";
import { ROUTE } from "routes";
import { fetchSignUpUser } from "store/features";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getUserInfo } from "store/selectors";
import { AttentionMessage, Clue, Form } from "./styles";

type FormValues = {
  userName: string;
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
};

interface IProps {
  toggle: () => void;
}

export const SignUp = ({ toggle }: IProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isPendingAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormValues>();

  const { userPassword, confirmPassword } = watch();

  const onSubmit: SubmitHandler<FormValues> = ({
    userEmail,
    userPassword,
    userName,
    confirmPassword,
  }) => {
    setErrorMessage(null);
    if (userPassword === confirmPassword) {
      dispatch(fetchSignUpUser({ userEmail, userPassword, userName }))
        .unwrap()
        .then(() => {
          toggle();
        })
        .catch((err) => {
          setErrorMessage(err);
        })
        .finally(() => reset());
    }
  };

  return (
    <>
      {isPendingAuth ? (
        <LoadingSpinner />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Sign Up</FormTitle>

          <FormSubTitle>Name</FormSubTitle>
          <Controller
            control={control}
            name="userName"
            rules={{
              required: "Name is required",
              maxLength: {
                value: 50,
                message: "Name must be less than 50 characters long",
              },
              pattern: {
                value: /[A-Za-z]/,
                message: "Name must contain only letters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value || ""} placeholder="Your name" type="text" />
            )}
          />
          {errors.userName && (
            <AttentionMessage>{errors.userName.message?.toString()}</AttentionMessage>
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
              <Input onChange={onChange} value={value || ""} placeholder="Your email" type="text" />
            )}
          />
          {errors.userEmail && (
            <AttentionMessage>{errors.userEmail.message?.toString()}</AttentionMessage>
          )}

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
                message: "Password must contain at least 6 or more characters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value || ""}
                placeholder="Your password"
                type="password"
              />
            )}
          />
          {errors.userPassword && (
            <AttentionMessage>{errors.userPassword.message?.toString()}</AttentionMessage>
          )}

          <FormSubTitle>Confirm password</FormSubTitle>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: "Confirm  your password",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value || ""}
                placeholder="Confirm password"
                type="password"
              />
            )}
          />
          {errors.confirmPassword && (
            <AttentionMessage>{errors.confirmPassword.message?.toString()}</AttentionMessage>
          )}
          {userPassword !== confirmPassword && (
            <AttentionMessage>Passwords don't match</AttentionMessage>
          )}

          <FormButton type="submit">Sign up</FormButton>

          <Clue>
            Already have an account? <FormLink to={`/${ROUTE.SIGN_IN}`}> Sign In</FormLink> or{" "}
            <FormLink to={`${ROUTE.HOME}`}>Home</FormLink>
          </Clue>

          {errorMessage && <AttentionMessage>{errorMessage}</AttentionMessage>}
        </Form>
      )}
    </>
  );
};
