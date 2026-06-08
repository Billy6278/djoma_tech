const contactValidator = (data) => {
  const errors = [];

  if (!data.lastName || data.lastName.trim() === '') {
    errors.push('Le nom est obligatoire');
  }

  if (!data.firstName || data.firstName.trim() === '') {
    errors.push('Le prénom est obligatoire');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Une adresse email valide est obligatoire');
  }

  if (!data.message || data.message.trim() === '') {
    errors.push('Le message est obligatoire');
  } else if (data.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }

  return errors;
};

module.exports = {
  contactValidator,
};
