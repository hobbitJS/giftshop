import LoginActionTypes from "./login.types";

const INITIAL_STATE = {
  email: "",
  password: "",
  isSignedIn: false,
  isLoading: false,
  signInError: "",
  signOutError: "",
  userUid: "",
  adminUid: "22V7GKcYefgLlPaEIDGM9N1fer83",
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.payload.input]: action.payload.value,
      };

    case LoginActionTypes.SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };

    case LoginActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        isLoading: false,
        userUid: action.payload,
      };

    case LoginActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        signInError: action.payload,
      };

    case LoginActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };

    case LoginActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        email: "",
        password: "",
        isSignedIn: false,
        isLoading: false,
      };

    case LoginActionTypes.SIGN_OUT_FAILURE: {
      return {
        ...state,
        signOutError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default LoginReducer;
