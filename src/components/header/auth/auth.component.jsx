import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../../redux/login/login.actions";

import { selectIsSignedIn } from "../../../redux/login/login.selectors";

import { AuthContainer } from "./auth.styles";

const Auth = ({ isSignedIn, signOut }) => (
  <AuthContainer>
    {isSignedIn ? (
      <Link to="/" onClick={() => signOut()}>
        SIGN OUT
      </Link>
    ) : (
      <Link to="/login">SIGN IN</Link>
    )}
  </AuthContainer>
);

const mapStateToProps = createStructuredSelector({
  isSignedIn: selectIsSignedIn,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
