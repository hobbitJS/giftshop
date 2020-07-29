import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { changeInputValue, signInStart } from "../../redux/login/login.actions";

import {
  selectUserData,
  selectIsSignedIn,
  selectIsLoading,
  selectIsAdminSignedIn,
} from "../../redux/login/login.selectors";

import {
  LoginOverlayContainer,
  LoginFormContainer,
  LogoContainer,
  FormContainer,
  FormLabel,
  FormInput,
  SignInButton,
} from "./login.styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import LoadingOverlay from "../../components/loading-overlay/loading-overlay.component";

const LoginForm = ({
  changeInputValue,
  userData,
  signIn,
  isLoading,
  isSignedIn,
  isAdmin,
}) => {
  const inputs = [
    { label: "Email Address", name: "email", placeholder: "admin@admin.com" },
    { label: "Password", name: "password", placeholder: "admin123" },
  ];

  const changeValue = ({ target: { name, value } }) =>
    changeInputValue(name, value);

  return (
    <LoginOverlayContainer>
      <LoginFormContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            const { email, password } = userData;
            signIn(email, password);
          }}
        >
          <h2>SIGN IN AS ADMINISTRATOR</h2>

          {inputs.map(({ label, name, placeholder }, idx) => (
            <FormLabel key={idx}>
              {label}
              <FormInput
                type={name}
                name={name}
                placeholder={placeholder}
                onChange={(e) => changeValue(e)}
                required
              />
            </FormLabel>
          ))}

          <SignInButton type="submit" value="SIGN IN" />
        </FormContainer>
      </LoginFormContainer>
      {isLoading ? <LoadingOverlay /> : null}
      {isSignedIn && isAdmin ? <Redirect to="/admin-panel/orders" /> : null}
    </LoginOverlayContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectUserData,
  isSignedIn: selectIsSignedIn,
  isLoading: selectIsLoading,
  isAdmin: selectIsAdminSignedIn,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (input, value) => dispatch(changeInputValue(input, value)),
  signIn: (email, password) => dispatch(signInStart(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
