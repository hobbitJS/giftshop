import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoryReducer from "./category/category.reducer";
import productReducer from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";
import checkoutReducer from "./checkout/checkout.reducer";
import searchPanelHeaderReducer from "./search-panel-header/search-panel-header.reducer";
import LoginReducer from "./login/login.reducer";
import OrdersReducer from "./orders/orders.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "login"],
};

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  searchPanelHeader: searchPanelHeaderReducer,
  login: LoginReducer,
  orders: OrdersReducer,
});

export default persistReducer(persistConfig, rootReducer);
