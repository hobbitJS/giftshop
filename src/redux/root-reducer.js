import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoryReducer from "./category/category.reducer";
import productReducer from "./product/product.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
