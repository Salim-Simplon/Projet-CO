import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deletePanierFromApi,
  getPanierFromApi,
  //updatePanierFromAPI,
} from "../Action/panierActions";
import formatPrix from "./Prix";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

class Order extends Component {
  componentDidMount() {
    this.props.getAllPanier();
  }

  state = {
    showCheckout: false,
  };
  // handleInput = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // passerCommande = (e) => {
  //   e.preventDefault();
  //   const commande = {
  //     name: this.state.name,
  //     mail: this.state.mail,
  //     adress: this.state.adress,
  //     CIN: this.state.CIN,
  //     panier: this.props.panier,
  //   };
  //   this.props.passerCommande(commande);
  // };

  render() {
    const prixPanier = (
      <span>
        {this.props.panier.reduce((a, el) => a + Number.parseFloat(el.prix), 0)}
      </span>
    );

    const foodPanier = this.props.panier.length ? (
      this.props.panier.map((el) => {
        return (
          <Zoom>
            <div className="carte" key={el._id}>
              <span
                title="Opps! Supprimer!"
                style={{ fontSize: "x-large", cursor: "pointer" }}
                role="img"
                aria-label="Opps! Supprimer!"
                onClick={() => {
                  this.props.delete(el._id);
                }}
              >
                🗑️
              </span>
              <h2>{el.titre}</h2>
              <img
                className="menu"
                src={"http://localhost:8000/" + el.photo}
                alt={el.titre}
              />
              <p>Prix : {formatPrix(el.prix)} </p>
            </div>
          </Zoom>
        );
      })
    ) : (
      <h2>
        Votre panier est vide
        <br />
        Veuillez y mettre des articles...
      </h2>
    );
    return (
      <div>
        <h1>Vous allez Commander ...</h1>
        <div className="top">{foodPanier}</div>
        <h2>
          Prix Total de la Commande : <span>{prixPanier}</span> TND
        </h2>
        <div>
          <button
            onClick={() => {
              this.setState({ showCheckout: true });
            }}
            className="re-size"
          >
            Passer la commande
          </button>
        </div>
        <div className="filter"></div>
        {this.state.showCheckout && (
          <Fade right cascade={true}>
            <div className="panier">
              <form className="form-commande">
                {/* <form onSubmit={this.passerCommande}> */}
                <ul className="form-container">
                  <li>
                    <label>Nom et prénom</label>
                    <input
                      name="name"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>Téléphone</label>
                    <input
                      name="phone"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>Adresse de livraison</label>
                    <input
                      name="adress"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>N° de C.I.N</label>
                    <input
                      name="CIN"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <button
                      className="re-size bto"
                      type="submit"
                      onClick={() =>
                        alert(
                          "Votre commande est validée, vous reservez un sms de confirmation dans les prochaines heures."
                        )
                      }
                    >
                      Valider
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </Fade>
        )}

        {/* <button
          className="re-size"
          onClick={() => alert("Votre commande est validée")}
        >
          Commander
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPanier: () => dispatch(getPanierFromApi()),
  delete: (_id) => dispatch(deletePanierFromApi(_id)),
  //updatePanier: (el) => dispatch(updatePanierFromAPI(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
