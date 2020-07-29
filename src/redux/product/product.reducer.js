import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  item: null,
  isFetching: false,
  error: "",
  isShownDeliveryDetails: false,
  isShownSubstitutionPolicy: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
      };

    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      const {
        id,
        title,
        defaultOption,
        options,
        stems,
        image,
      } = action.payload;

      return {
        ...state,
        item: {
          id,
          title,
          options,
          selectedOption: defaultOption,
          selectedBackgroundImage: options[defaultOption].images.big[0],
          selectedProductIcon: 0,
          selectedOptionDetails: options[defaultOption].details,
          stems,
          cardImage: image,
        },
        isFetching: false,
      };

    case ProductActionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    case ProductActionTypes.SELECT_OPTION:
      return {
        ...state,
        item: {
          ...state.item,
          selectedOption: action.payload,
        },
      };

    case ProductActionTypes.SELECT_PRODUCT_ICON:
      return {
        ...state,
        item: {
          ...state.item,
          selectedProductIcon: action.payload,
        },
      };

    case ProductActionTypes.SELECT_BACKGROUND_IMAGE:
      return {
        ...state,
        item: {
          ...state.item,
          selectedBackgroundImage: action.payload,
        },
      };

    case ProductActionTypes.SHOW_DELIVERY_DETAILS:
      return {
        ...state,
        isShownDeliveryDetails: true,
      };

    case ProductActionTypes.SHOW_SUBSTITUTION_POLICY:
      return {
        ...state,
        isShownSubstitutionPolicy: true,
      };

    case ProductActionTypes.HIDE_DELIVERY_DETAILS:
      return {
        ...state,
        isShownDeliveryDetails: false,
      };

    case ProductActionTypes.HIDE_SUBSTITUTION_POLICY:
      return {
        ...state,
        isShownSubstitutionPolicy: false,
      };

    default:
      return state;
  }
};

export default productReducer;
