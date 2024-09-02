import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import movieReducer from "./features/movieDetailsSlice";
import userReducer from "./features/userSlice";
import favoritesReducer from "./features/favoritesSlice";
import trendsReducer from "./features/trendsSlice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  user: userReducer,
  favorites: favoritesReducer,
  trends: trendsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
