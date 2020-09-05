import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div className="cover-img">
          <div>Prêts à faire du tri dans vos grenier ?</div>
        </div>
        <h1>Découvrir comment ça marche</h1>
        <h2>Vendre, c’est simple !</h2>
        <div className="vente">
          <div>
            <img
              src="https://img.over-blog-kiwi.com/1/39/75/82/20181022/ob_7aa296_img-1686-1.JPG"
              alt="Mon article"
            />
            <h3>1. Mets en ligne gratuitement</h3>
            <p className="achat">
              Prends ton article en photo, décris-le et fixe ton prix. Clique
              sur “Ajouter” et c’est en ligne !
            </p>
          </div>
          <div>
            <img
              src="https://www.demenager-malin.fr/wp-content/uploads/2020/06/emballage-objet-fragile.jpg"
              alt="Mon colis"
            />
            <h3>2. Vends et envoie facilement</h3>
            <p className="achat">
              Vendu ! Emballe ton article et imprime le bordereau d’envoi. Tu as
              5 jours pour le déposer à la poste la plus proche de chez toi.
            </p>
          </div>
          <div>
            <img
              src="https://radiomedtunisie.com/wp-content/uploads/2020/03/dinarr.png"
              alt="Mon argent"
            />
            <h3>3. Jour de paie !</h3>
            <p className="achat">
              Il y a 0 frais de vente, ce que tu gagnes est à toi. Tu recevras
              l’argent quand l’acheteur aura validé la réception de l’article.
            </p>
          </div>
        </div>

        <h2>Achète en toute sécurité !</h2>
        <div className="vente">
          <div>
            <img
              src="https://static.lexpress.fr/medias_11423/w_1838,h_1379,c_crop,x_72,y_0/w_605,h_350,c_fill,g_north/v1490284408/vide-dressing-3_5848921.jpg"
              alt="Mon article"
            />
            <h3>1. Trouve-le</h3>
            <p className="achat">
              Trouve ton bonheur parmi des millions d’articleset des milliers de
              marques.
            </p>
          </div>
          <div>
            <img
              src="https://www.journees-achat-responsable.fr/wp-content/uploads/femme-ordinateur-1140x757.jpg"
              alt="Mon colis"
            />
            <h3>2. Achète-le</h3>
            <p className="achat">
              Echange avec le vendeur et achète en un simple clic.
            </p>
          </div>
          <div>
            <img
              src="https://www.laposte.fr/medias/sys_master/h22/h3a/11183102230558.jpg"
              alt="Mon argent"
            />
            <h3>3. Reçois-le</h3>
            <p className="achat">
              Suis l’arrivée de ton article grâce à la date de livraison
              estimée. Patience, ton article sera bientôt avec toi. Paie à la
              poste lors de la reception de votre colis.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Tu es prêt(e) ?</h2>
        <Link to="/auto">
        <button className="re-size">Commencer à acheter</button> </Link>
        <Link to="/auto">
        <button className="re-size">Commencer à vendre</button></Link>
      </div>
    </div>
  );
};

export default Home;
