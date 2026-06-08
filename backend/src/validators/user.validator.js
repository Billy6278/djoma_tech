const createUserValidator = (data) => {
  const errors = [];
  if (!data.firstName || data.firstName.trim() === '') errors.push('Le prénom est obligatoire');
  if (!data.lastName || data.lastName.trim() === '') errors.push('Le nom de famille est obligatoire');
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Une adresse email valide est obligatoire');
  if (!data.password || data.password.length < 6) errors.push('Le mot de passe doit comporter au moins 6 caractères');
  if (data.role && !['ADMIN', 'USER'].includes(data.role)) errors.push('Le rôle spécifié est invalide');
  return errors;
};

const updateUserValidator = (data) => {
  const errors = [];
  if (data.firstName !== undefined && data.firstName.trim() === '') errors.push('Le prénom ne peut pas être vide');
  if (data.lastName !== undefined && data.lastName.trim() === '') errors.push('Le nom ne peut pas être vide');
  if (data.email !== undefined && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Une adresse email valide est obligatoire');
  if (data.password !== undefined && data.password.length < 6) errors.push('Le mot de passe doit comporter au moins 6 caractères');
  if (data.role !== undefined && !['ADMIN', 'USER'].includes(data.role)) errors.push('Le rôle spécifié est invalide');
  return errors;
};

module.exports = {
  createUserValidator,
  updateUserValidator
};
