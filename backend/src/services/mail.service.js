const logger = require('../config/logger');

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'djomatech777@gmail.com';

const sendContactEmail = async ({ firstName, lastName, email, address, message }) => {
  const fullName = `${firstName} ${lastName}`.trim();

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: fullName,
      email,
      address: address || 'Non renseignée',
      message,
      _subject: `[Djoma-Tech] Nouveau message de ${fullName}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    logger.error('[Mail] Échec FormSubmit:', data);
    throw new Error(data.message || 'Échec de l\'envoi du message');
  }

  logger.info(`[Mail] Message de contact envoyé à ${CONTACT_EMAIL}`);
  return { success: true, messageId: data.message || 'sent' };
};

module.exports = {
  sendContactEmail,
};
