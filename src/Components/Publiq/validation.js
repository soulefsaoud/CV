const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Merci de communiquer votre prénom";
  } else if (values.firstname.length < 2) {
    errors.firstname = "Au minimum 2 caractères";
  }

  if (!values.lastname) {
    errors.lastname = "Merci de communiquer votre nom";
  } else if (values.lastname.length < 2) {
    errors.lastname = "Au minimum 2 caractères";
  }

  if (!values.email) {
    errors.email = "Email requise";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalide";
  }

  if (!values.password) {
    errors.password = "Merci de communiquer votre mot de passe";
  } else if (values.lastname.length < 2) {
    errors.lastname = "Au minimum 2 caractères";
  }

  if (values.confirm !== values.password) {
    errors.confirm = "Les mots de passes ne correspondent pas";
  }

  return errors;
};

export default validate;
