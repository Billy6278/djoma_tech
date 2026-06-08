const mailService = require('../services/mail.service');
const { formatResponse } = require('../utils/helpers');
const { HTTP_STATUS } = require('../utils/constants');

const sendContactMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, address, message } = req.body;

    await mailService.sendContactEmail({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      address: address?.trim() || '',
      message: message.trim(),
    });

    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Votre message a été envoyé avec succès. Nous vous répondrons très bientôt.')
    );
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
      formatResponse(false, 'Impossible d\'envoyer le message. Veuillez réessayer plus tard.')
    );
  }
};

module.exports = {
  sendContactMessage,
};
