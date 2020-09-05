import { connect } from "react-redux";
import { editeProductFromApi } from "../Action/productActions";
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Icon } from "semantic-ui-react";

const ModalEdite = (props) => {
  const { className } = props;
console.log("el", props.el);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [productTitle, setProductTitle] = useState(props.el.titre);
  const [productType, setProductType] = useState(props.el.type);
  const [productState, setProductState] = useState(props.el.stat);
  const [productSex, setProductSex] = useState(props.el.sex);
  const [productPic, setProductPic] = useState(props.el.photo);
  const [productDisp, setProductDispo] = useState(props.el.disponibilité);
  const [productDiscrip, setProductDiscrip] = useState(props.el.description);
  const [productPrice, setProductPrice] = useState(props.el.prix);

  const send = () => {
    let obj = {
      _id: props.el._id,
      titre: productTitle,
      type: productType,
      etat: productState,
      sex: productSex,
      photo: productPic,
      disponibilité: productDisp,
      description: productDiscrip,
      prix: productPrice,
    };

    props.editeProduct(obj);
    console.log(obj);
    toggle();
  };

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div>
      <Icon onClick={toggle} className="edit">
        {" "}
        ✎
      </Icon>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>Modifier l'article</ModalHeader>
        <ModalBody>
          <form className="modaledit">
            <div>
              <span>Produit : </span>
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.el.titre}
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </div>
            <div>
              <span>Type</span>
            </div>
            <div>
              <select onChange={(e) => setProductType(e.target.value)}>
                <option value="">--</option>
                <option value="Vetement">Vetement</option>
                <option value="Jouet">Jouet</option>
                <option value="Meuble">Meuble</option>
                <option value="Decoration">Decoration</option>
              </select>
            </div>
            <div>
              <span>Etat</span>
            </div>
            <div>
              <select onChange={(e) => setProductState(e.target.value)}>
                <option value="">--</option>
                <option value="Ancienne">Ancienne</option>
                <option value="Neuve">Neuve</option>
              </select>
            </div>
            <div>
              <span>Sexe</span>
            </div>
            <div>
              <select onChange={(e) => setProductSex(e.target.value)}>
                <option value="">--</option>
                <option value="Fille">Fille</option>
                <option value="Garçon">Garçon</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
            <div>
              <span>Statut</span>
            </div>
            <div>
              <select onChange={(e) => setProductDispo(e.target.value)}>
                <option value="">--</option>
                <option value="Disponible">Disponible</option>
                <option value="Vendu">Vendu</option>
              </select>
            </div>
            <div>
              <span>Photo</span>
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => setProductPic(e.target.files[0])}
              />
            </div>
            <div>
              <span>Description</span>
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.el.description}
                onChange={(e) => setProductDiscrip(e.target.value)}
              />
            </div>
            <div>
              <span>Prix</span>
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.el.prix}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
          <Button color="primary" onClick={() => send()}>
            Envoyer
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProds: state.userprod,
  };
};

const mapDispatchToProps = (dispatch) => ({
  editeProduct: (el) => dispatch(editeProductFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdite);
