import { GET_ALL_PANIER } from "../Action/types";



export default function panierReducer(state = [], action) {
  if (action.type === GET_ALL_PANIER) {
    return action.payload;
  }
  return state;
}
