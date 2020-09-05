import Axios from "axios";
import {
  GET_ALL_PRODUCT,
  SELECT_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_ID,
} from "./types";
import JwtDecode from "jwt-decode";
/* get  product */

export const getAllProduct = (payload) => ({
  type: GET_ALL_PRODUCT,
  payload: payload,
});

export function getProductFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8000/produits/").then((res) =>
      dispatch(getAllProduct(res.data))
    );
}

/* get  product by user */

export const getProductUser = (payload) => ({
  type: GET_PRODUCT_BY_ID,
  payload: payload,
});

export function getProductByUserFromApi() {
  if (localStorage.getItem("token") !== null) {
    const payload = JwtDecode(localStorage.getItem("token"));

    return (dispatch) =>
      Axios.get(
        "http://localhost:8000/produits/" + payload.user._id
      ).then((res) => dispatch(getProductUser(res.data)));
  }
}

/* add  product */

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export function postProduct(el) {
  if (localStorage.getItem("token") !== null) {
    const payload = JwtDecode(localStorage.getItem("token"));

    return (dispatch) => {
      const formData = new FormData();
      formData.append("photo", el.photo);
      formData.set("titre", el.titre);
      formData.set("type", el.type);
      formData.set("etat", el.etat);
      formData.set("sex", el.sex);
      formData.set("disponibilité", el.disponibilité);
      formData.set("description", el.description);
      formData.set("prix", el.prix);
      formData.set("userId", payload.user._id);

      Axios.post(`http://localhost:8000/produits/`, formData, {
        Headers: { "content-type": "multipart/form-data" },
      })
        .then((res) => {
          dispatch(getProductByUserFromApi());
        })
        .catch((err) => console.log(err));
    };
  }
}
/* delete Product */

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export function deleteProductFromApi(_id) {
  return (dispatch) =>
    Axios.delete("http://localhost:8000/produits/" + _id).then((res) =>
      dispatch(getProductByUserFromApi())
    );
}

/* edite Product */

export const editeProduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export function editeProductFromApi(el) {
  if (localStorage.getItem("token") !== null) {
    const payload = JwtDecode(localStorage.getItem("token"));

    return (dispatch) => {
      const formData = new FormData();
      formData.append("photo", el.photo);
      formData.set("titre", el.titre);
      formData.set("type", el.type);
      formData.set("etat", el.etat);
      formData.set("sex", el.sex);
      formData.set("disponibilité", el.disponibilité);
      formData.set("description", el.description);
      formData.set("prix", el.prix);
      formData.set("userId", payload.user._id);

      Axios.put("http://localhost:8000/produits/" + el._id, formData, {
        Headers: { "content-type": "multipart/form-data" },
      }).then((res) => dispatch(getProductByUserFromApi()), console.log(el));
    };
  }
}

/* ajouter au panier */

export const addToPanier = (payload) => ({
  type: SELECT_PRODUCT,
  payload,
});

export function selectProduct(el) {
  if (localStorage.getItem("token") !== null) {
    const payload = JwtDecode(localStorage.getItem("token"));
    return (dispatch) =>
      Axios.post(`http://localhost:8000/paniers/`, {
        _id: el._id,
        titre: el.titre,
        type: el.type,
        etat: el.etat,
        sex: el.sex,
        disponibilité: el.disponibilité,
        photo: el.photo,
        description: el.description,
        prix: el.prix,
        userId: payload.user._id,
      })
        .then((res) =>
          dispatch(addToPanier({ ...el, userId: payload.user._id }))
        )
        .catch((err) => console.log(err));
  }
}
