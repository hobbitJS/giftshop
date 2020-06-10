import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoryReducer from "./category/category.reducer";
import productReducer from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";
import checkoutReducer from "./checkout/checkout.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
