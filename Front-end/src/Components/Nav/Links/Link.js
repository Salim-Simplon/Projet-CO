import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  connectUserFromApi,
  logoutUser,
  getCurrentUser,
} from "../../../Action/userActions";

class Link extends Component {
  componentDidMount = () => {
    this.props.connectUser();
    this.props.getCurrentUser();
  };
  render() {
    return (
      <div>
        <div className="link">
          {this.props.user ? (
            this.props.user == "none" ? (
              <NavLink to="/auto">Connexion</NavLink>
            ) : this.props.user.user ? (
              this.props.user.user.role == "Client" ? (
                <>
                  <NavLink to="/client">Mon Espace</NavLink>
                  <NavLink to="/home">Produits</NavLink>
                  <NavLink
                    to="/signup"
                    onClick={() => {
                      this.props.logoutUser();
                    }}
                  >
                    Deconnexion
                  </NavLink>
                </>
              ) : this.props.user.user.role == "Administrateur" ? (
                <>
                  <NavLink to="/admin">Mon Espace</NavLink>
                  <NavLink to="/home">Produits</NavLink>
                  <NavLink
                    to="/signup"
                    onClick={() => {
                      this.props.logoutUser();
                    }}
                  >
                    Deconnexion
                  </NavLink>
                </>
              ) : null
            ) : null
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.role,
});
const mapDispatchToProps = (dispatch) => ({
  connectUser: () => dispatch(connectUserFromApi()),
  logoutUser: () => dispatch(logoutUser()),
  getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
