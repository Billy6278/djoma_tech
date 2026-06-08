const registerValidator = (data) => {
  const errors = [];
  if (!data.firstName || data.firstName.trim() === '') errors.push('Le prénom est obligatoire');
  if (!data.lastName || data.lastName.trim() === '') errors.push('Le nom de famille est obligatoire');
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Une adresse email valide est obligatoire');
  if (!data.password || data.password.length < 6) errors.push('Le mot de passe doit comporter au moins 6 caractères');
  return errors;
};

const loginValidator = (data) => {
  const errors = [];
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Une adresse email valide est obligatoire');
  if (!data.password) errors.push('Le mot de passe est obligatoire');
  return errors;
};

module.exports = {
  registerValidator,
  loginValidator
};
