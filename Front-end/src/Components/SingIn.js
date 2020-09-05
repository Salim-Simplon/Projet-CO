import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../Action/userActions";
import { Link } from "react-router-dom";

const SingIn = ({ addPerson }) => {
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userCIN, setUserCIN] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userRole, setUserRole] = useState("Client");

  return (
    <div className="Sin">
      <div className="Siin">
        <h1>Inscription</h1>

        <Link to="/auto">
          <button className="btn"> Authentification</button>
        </Link>

        <form>
          <span>Nom d'utilisateur</span>
          <input
            type="text"
            placeholder="Entrer votre nom"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>Téléphone</span>
          <input
            type="tel"
            placeholder="Entrer le numero de tel "
            minLength="8"
            maxLength="13"
            required
            value={userTel}
            onChange={(e) => setUserTel(e.target.value)}
          />
          <span>Mail</span>
          <input
            type="text"
            placeholder="Entrer le mail "
            required
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
          />
          <span>Adress</span>
          <input
            type="text"
            placeholder="Ville, Pays "
            required
            value={userAdress}
            onChange={(e) => setUserAdress(e.target.value)}
          />
          <span>N° CIN</span>
          <input
            type="number"
            placeholder="Entrer le N° de CIN "
            minLength="8"
            maxLength="8"
            required
            value={userCIN}
            onChange={(e) => setUserCIN(e.target.value)}
          />
          <span>Mot de passe</span>
          <input
            type="password"
            placeholder="Entrer le mot de passe"
            minLength="8"
            required
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />
          <span>Je suis</span>
          <select onChange={(e) => setUserRole(e.target.value)}>
            <option value="Client">Client</option>
            <option value="Administrateur">Administrateur</option>
          </select>
          <Link to="/carte" className="margin">
            <button
              onClick={() =>
                addPerson({
                  name: userName,
                  cin: userCIN,
                  adress: userAdress,
                  tel: userTel,
                  mail: userMail,
                  pass: userPass,
                  role: userRole,
                })
              }
            >
              S'inscrire
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (user) => dispatch(postUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
