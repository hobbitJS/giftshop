import { createSelector } from "reselect";

const selectLogin = (state) => state.login;

export const selectUserData = createSelector([selectLogin], (login) => {
  const { email, password } = login;

  return {
    email,
    password,
  };
});

export const selectIsSignedIn = createSelector(
  [selectLogin],
  (login) => login.isSignedIn
);

export const selectIsLoading = createSelector(
  [selectLogin],
  (login) => login.isLoading
);

export const selectIsAdminSignedIn = createSelector([selectLogin], (login) =>
  login.userUid === login.adminUid ? true : false
);
