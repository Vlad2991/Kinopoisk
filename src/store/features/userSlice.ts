import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  User,
} from "firebase/auth";
import { Theme } from "ui/theme";
import { FirebaseError, FirebaseErrorCode, getFirebaseMessage } from "utils/firebaseErrors";

interface IUserState {
  isAuth: boolean;
  isDark: Theme;
  name: string;
  email: string;
  isPendingAuth: boolean;
  error: null | FirebaseError;
}

const initialState: IUserState = {
  isAuth: false,
  isDark: "dark",
  name: "",
  email: "",
  isPendingAuth: false,
  error: null,
};

export const fetchSignUpUser = createAsyncThunk<
  { email: string; userName: string },
  { userEmail: string; userPassword: string; userName: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ userEmail, userPassword, userName }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    sendEmailVerification(auth.currentUser as User);
    const email = userCredential.user.email as string;

    return { email, userName };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { signInEmail: string; userSignInName: string },
  { userEmailSignIn: string; userPasswordSignIn: string; userSignInName: string },
  { rejectValue: FirebaseError }
>(
  "user/fetchSignInUser",
  async ({ userEmailSignIn, userPasswordSignIn, userSignInName }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmailSignIn,
        userPasswordSignIn,
      );
      const signInEmail = userCredential.user.email as string;

      return { signInEmail, userSignInName };
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  },
);

export const resetPassword = createAsyncThunk<void, { userEmail: string }, { rejectValue: string }>(
  "user/resetPassword",
  async ({ userEmail }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, userEmail);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  },
);

export const updateUserPassword = createAsyncThunk<
  void,
  {
    userEmail: string;
    userPassword: string;
    newPassword: string;
  },
  { rejectValue: string }
>("user/updateUserPassword", async ({ newPassword, userPassword }, { rejectWithValue }) => {
  const auth = getAuth();

  const user = auth.currentUser as User;
  const credential = EmailAuthProvider.credential(user.email as string, userPassword);

  if (user)
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDarkMode(state) {
      state.isDark === "dark" ? (state.isDark = "light") : (state.isDark = "dark");
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.isAuth = true;
      state.email = payload.email;
      state.name = payload.userName;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.isAuth = true;
      state.error = null;
      state.email = payload.signInEmail;
      state.name = payload.userSignInName;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
      }
    });
    builder.addCase(updateUserPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
    });
    builder.addCase(updateUserPassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
    });
    builder.addCase(updateUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
      }
    });
  },
});

export const { setDarkMode, resetError } = userSlice.actions;

export default userSlice.reducer;
