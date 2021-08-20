import React from "react";
import SimpleMap from "./GoogleCard";

const ContactPage = () => {
  return (
    <main className="main">
      <div className="text-center bg-custom mb-4 border border-primary rounded-pill">
        <h1>Contact</h1>
      </div>

      <section className="row  border border-primary rounded">
        <div className=" col m-5 w-50">
          <div>
            <h3>Adresse :</h3>
            <p>Philiance</p>
            <p>Porc Elysée</p>
            <p>41 rue Michel Ange </p>
            <p>91080 Courcouronnes </p>
            <p>Tèl : 01 69 47 45 90</p>
            <p>
              Email :
              <a href="mailto:contact-ildefrance@philiance.com">
                contact-iledefrance@philiance.com
              </a>
            </p>
          </div>
          <div>
            <h3>Ouverture de l'accueil téléphonique :</h3>
            <p> du lundi au vendredi de 8h45 à 19h00</p>
            <p>Tèl : 01 69 47 45 90</p>
          </div>
        </div>
        <div className="col m-5">
          <h3>Carte</h3>
          <SimpleMap/>
          
        </div>
      </section>
    </main>
  );
};
export default ContactPage;
