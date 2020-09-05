import { GET_PRODUCT_BY_ID } from "../Action/types";

export default function userprodReducer(state = [], action) {
  if (action.type === GET_PRODUCT_BY_ID) {
    console.log("productid  reducer", action.payload);
    return action.payload;
  } else {
    return state;
  }
}
