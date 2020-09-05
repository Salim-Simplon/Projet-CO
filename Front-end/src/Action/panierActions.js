import Axios from "axios";
import JwtDecode from "jwt-decode";
import { GET_ALL_PANIER, DELETE_PANIER} from "./types";

/* afficher le panier */

export const getAllPanier = (payload) => ({
  type: GET_ALL_PANIER,
  payload,
});

export function getPanierFromApi() {
  if (localStorage.getItem("token") !== null) {
    const payload = JwtDecode(localStorage.getItem("token"));
  return (dispatch) =>
    Axios.get("http://localhost:8000/paniers/" + payload.user._id).then((res) =>
      dispatch(getAllPanier(res.data))
    );
}
}
/* delete food */

export const deletePanier = (payload) => ({
  type: DELETE_PANIER,
  payload,
});

export function deletePanierFromApi(_id) {
  return (dispatch) =>
    Axios.delete("http://localhost:8000/paniers/" + _id).then((res) =>
      dispatch(getPanierFromApi())
    );
}


//  get  panier by user 

// export const getPaniertUser = (payload) => ({
//   type: GET_PANIER_BY_ID,
//   payload: payload,
// });

// export function getPanierByUserFromApi() {
//   let userId1 = localStorage.getItem("_id");
//   return (dispatch) =>
//     Axios.get("http://localhost:8000/paniers/" + userId1).then((res) =>
//       dispatch(getPaniertUser(res.data))
//     );
// }

// // ajouter au panier 

// export const addPanier = (payload) => ({
//   type: ADD_PANIER,
//   payload,
// });

// export function postPanier(el) {
//   return (dispatch) =>
//     Axios.post(`http://localhost:3000/panier`, {
//       id: el.id,
//       photo: el.photo,
//       name: el.name,
//       compo: el.compo,
//       qtite: el.qtite,
//       prix: el.prix,
//     })
//       .then((res) => dispatch(addPanier(el)))
//       .catch((err) => console.log(err));
// } 

// // edit food

// export const updatePanier = (payload) => ({
//   type: UPDATE_PANIER,
//   payload,
// });

// export function updatePanierFromAPI(el) {
//   return (dispatch) =>
//     Axios.put("http://localhost:3000/panier/" + el.id, el).then((res) =>
//       dispatch(getPanierFromApi())
//     );
// }
