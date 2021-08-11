import React from "react";

const ContactPage = () => {
  return (
    <main className="main">
      <div className="text-center mb-4">
        <h1>Contact</h1>
      </div>
      <section className="d-flex ">
        <div className="w-50">
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
                contact-ildefrance@philiance.com
              </a>
            </p>
          </div>
          <div>
            <h3>Ouverture de l'accueil téléphonique :</h3>
            <p> du lundi au vendredi de 8h45 à 19h00</p>
            <p>Tèl : 01 69 47 45 90</p>
          </div>
        </div>
        <div className="w-50">
          <h3>Map</h3>
          <img className="imageMap" src="images/philiancePNG.PNG" alt="" />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
