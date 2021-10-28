const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
        errors.first_name = "Merci de communiquer votre prénom";
    } else if (values.first_name.length < 2) {
        errors.first_name = "Au minimum 2 caractères";
    }

    if (!values.last_name) {
        errors.last_name = "Merci de communiquer votre nom";
    } else if (values.last_name.length < 2) {
        errors.last_name = "Au minimum 2 caractères";
    }

    if (!values.email) {
        errors.email = "Email requise";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email invalide";
    }

    if (!values.telephone) {
        errors.telephone = "Merci de communiquer un numéro de téléphone";
    } else if (values.telephone.length < 10) {
        errors.telephone = "Au minimum 10 chiffres";
    }

    return errors;
};

export default validate;
