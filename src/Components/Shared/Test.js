import React, { Component } from "react";
import { Form } from "react-bootstrap";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = "true";

  Object.values(formErrors).forEach((val) => {
    val.legnth > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      nom: null,
      prenom: null,
      telNumber: null,
      password: null,
      confirmPassword: null,
      formErrors: {
        email: "",
        nom: "",
        prenom: "",
        telNumber: "",
        password: "",
        confirmPassword: "",
      },
    };
    // this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
   
   --SUBMITTING--
   email: ${this.state.email}
   nom: ${this.state.nom}
   prenom: ${this.state.prenom}
   telephone: ${this.state.telNumber}
   mot de passe: ${this.state.password}
   confirm mot de passe: ${this.state.confirmPassword}
   
   `);
    } else {
      console.log("FORMULAIRE NON VALID- AFFICHER MESSAGE ERREUR");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : " adresse mail invalide";
        break;

      case "nom":
        formErrors.nom = value.length < 5 ? "minimum 5 caractères" : "";
        break;

      case "prenom":
        formErrors.prenom = value.length < 5 ? "minimum 5 caractères" : "";
        break;

      case "telNumber":
        formErrors.telNumber =
          value.length < 10 ? "entrer votre numéro au format 10 chiffres" : "";
        break;

      case "password":
        formErrors.password = value.length < 8 ? "minimum 8 caractères" : "";
        break;

      case "confirmPassword":
        formErrors.confirmPassword =
          value.length < 8 ? "minimum 8 caractères" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container">
        <div className="form-wrapper">
          <h5 className="titrepage">S'inscrire</h5>
          <Form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Votre adresse mail"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="nom">
              <label htmlFor="nom">Nom</label>
              <input
                className={formErrors.nom.length > 0 ? "error" : null}
                placeholder="Votre nom"
                type="text"
                name="nom"
                maxLength="30"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.nom.length > 0 && (
                <span className="errorMessage">{formErrors.nom}</span>
              )}
            </div>

            <div className="prenom">
              <label htmlFor="prenom">Prénom</label>
              <input
                className={formErrors.prenom.length > 0 ? "error" : null}
                placeholder="Votre prenom"
                type="text"
                name="prenom"
                maxLength="30"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.prenom.length > 0 && (
                <span className="errorMessage">{formErrors.prenom}</span>
              )}
            </div>

            <div className="telNumber">
              <label htmlFor="telNumber">Téléphone</label>
              <input
                className={formErrors.telNumber.length > 0 ? "error" : null}
                placeholder="Votre numéro de téléphone"
                type="text"
                name="telNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.telNumber.length > 0 && (
                <span className="errorMessage">{formErrors.telNumber}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Mot de passe</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Votre mot de passe"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="confirmPassword">
              <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
              <input
                className={
                  formErrors.confirmPassword.length > 0 ? "error" : null
                }
                placeholder="Confirmez votre mot de passe"
                type="password"
                name="confirmPassword"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.confirmPassword.length > 0 && (
                <span className="errorMessage">
                  {formErrors.confirmPasword}
                </span>
              )}
            </div>

            <div className="createAccount">
              <button
                className="btn btn-primary"
                variant="primary"
                type="submit"
              >
                S'inscrire
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default TestPage;
