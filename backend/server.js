require('dotenv').config();
const app = require('./src/app');
const db = require('./src/models');
const logger = require('./src/config/logger');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await db.sequelize.authenticate();
    logger.info('MySQL connecté avec succès !');
  } catch (error) {
    logger.warn('MySQL indisponible — le serveur démarre sans base de données.');
  }

  app.listen(PORT, () => {
    logger.info(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

startServer();
