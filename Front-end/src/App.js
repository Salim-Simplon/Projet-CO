import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Carte from "./Container/Carte";
import Commande from "./Container/Commande";
import Connexion from "./Container/Connexion";
import Deconnexion from "./Container/Decnx";
import Auto from "./Container/Auten";
import Accueil from "./Container/Accueil";
import Orders from "./Container/Orders";
import Clients from "./Container/Clients";
import Admin from "./Container/Admin";
import { getCurrentUser } from "./Action/userActions";
import { connect } from "react-redux";

//json-server --watch db.json

function App(props) {
  useEffect(() => {
    props.getCurrentUser();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {console.log("ppppppp", props.user)}
        {props.user ? (
          props.user === "none" ? (
            <Switch>
              <Route exact path="/" component={Accueil} />
              <Route exact path="/auto" component={Auto} />
              <Route path="/cxn">
                <Connexion />
              </Route>
              <Route exact path="/signup" component={Deconnexion} />
              <Redirect to="/" />
            </Switch>
          ) : props.user.user ? (
            props.user.user.role === "Client" ? (
              <Switch>
                <Route exact path="/" component={Accueil} />
                <Route exact path="/home" component={Carte} />
                <Route exact path="/client" component={Clients} />
                <Route path="/panier">
                  <Commande />
                </Route>
                <Route path="/carte">
                  <Carte />
                </Route>
                <Redirect to="/" />
              </Switch>
            ) : props.user.user.role === "Administrateur" ? (
              <Switch>
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/" component={Accueil} />
                <Route exact path="/home" component={Carte} />
                <Route path="/panier">
                  <Commande />
                </Route>
                <Route path="/carte">
                  <Carte />
                </Route>
                <Redirect to="/" />
                <Route path="/enCours">
                  <Orders />
                </Route>
                <Redirect to="/" />
              </Switch>
            ) : null
          ) : null
        ) : null}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.role,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
