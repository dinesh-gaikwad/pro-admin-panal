const app = require('./app');
const connectDB = require('./config/database');
const env = require('./config/env');
const logger = require('./utils/logger');

const startServer = async () => {
  await connectDB();

  app.listen(env.port, () => {
    logger.info(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
  });
};

startServer();
