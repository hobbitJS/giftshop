import CheckoutActionTypes from "./checkout.types";

const INITIAL_STATE = {
  formData: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  error: null,
  isLoading: false,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutActionTypes.UPDATE_CHECKOUT_FORM_FIELD:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };

    case CheckoutActionTypes.CLEAR_CHECKOUT_FORM:
      return {
        ...state,
        formData: INITIAL_STATE.formData,
      };

    case CheckoutActionTypes.SET_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };

    case CheckoutActionTypes.SET_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case CheckoutActionTypes.SET_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
