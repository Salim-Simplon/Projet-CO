import { GET_ALL_PRODUCT, ADD_PRODUCT } from "../Action/types";

const initialState = {
  produits: [],
};

export default function productReducer(state = initialState, action) {
  if (action.type === GET_ALL_PRODUCT) {
    return action.payload;
  }
  if (action.type === ADD_PRODUCT)
    return { ...state, products: { ...action.payload, ...state.products } };
  return state;
}
