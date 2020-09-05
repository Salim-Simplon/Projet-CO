import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./SingReducer";
import panierReducer from "./PanierReducer";
import roleReducer from "./roleReducer";
import userprodReducer from "./userprodReducer";

const allReducers = combineReducers({
  produits: productReducer,
  panier: panierReducer,
  user: userReducer,
  role: roleReducer,
  userprod: userprodReducer,
});

export default allReducers;
