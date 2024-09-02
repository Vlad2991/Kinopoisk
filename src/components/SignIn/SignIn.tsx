import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormButton, FormLink, FormSubTitle, FormTitle, Input, LoadingSpinner } from "components";
import { AttentionMessage, Clue, Form, StyledCustomLink } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchSignInUser } from "store/features";
import { useState } from "react";
import { getUserInfo } from "store/selectors";
import { ROUTE } from "routes";

type FormValues = {
  userEmailSignIn: string;
  userPasswordSignIn: string;
  userSignInName: string;
};

interface IProps {
  toggle: () => void;
}

export const SignIn = ({ toggle }: IProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isPendingAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({
    userEmailSignIn,
    userPasswordSignIn,
    userSignInName,
  }) => {
    setErrorMessage(null);
    dispatch(fetchSignInUser({ userEmailSignIn, userPasswordSignIn, userSignInName }))
      .unwrap()
      .then(() => {
        toggle();
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  return (
    <>
      {isPendingAuth ? (
        <LoadingSpinner />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Sign In</FormTitle>

          <FormSubTitle>Name</FormSubTitle>
          <Controller
            control={control}
            name="userSignInName"
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
              <Input 
                onChange={onChange} 
                value={value || ""} 
                placeholder="Your name" 
                type="text" />
            )}
          />
          {errors.userSignInName && (
            <AttentionMessage>{errors.userSignInName.message?.toString()}</AttentionMessage>
          )}

          <FormSubTitle>Email</FormSubTitle>

          <Controller
            control={control}
            name="userEmailSignIn"
            rules={{
              required: "Email is required",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "Please insert a valid email address",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} 
                value={value || ""} 
                placeholder="Your email" 
                type="text" />
            )}
          />

          {errors.userEmailSignIn && (
            <AttentionMessage>{errors.userEmailSignIn.message?.toString()}</AttentionMessage>
          )}

          <FormSubTitle>Password</FormSubTitle>

          <Controller
            control={control}
            name="userPasswordSignIn"
            rules={{
              required: "Wrong password",
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters",
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

          {errors.userPasswordSignIn && (
            <AttentionMessage>{errors.userPasswordSignIn.message?.toString()}</AttentionMessage>
          )}
          <StyledCustomLink to={`/${ROUTE.RESET}`}>Forgot password?</StyledCustomLink>

          {errorMessage && <AttentionMessage>{errorMessage}</AttentionMessage>}

          <FormButton type="submit">Sign in</FormButton>

          <Clue>
            Don’t have an account? <FormLink to={`/${ROUTE.SIGN_UP}`}>Sign Up</FormLink> or{" "}
            <FormLink to={`${ROUTE.HOME}`}>Home</FormLink>
          </Clue>
          <Clue></Clue>
        </Form>
      )}
    </>
  );
};
