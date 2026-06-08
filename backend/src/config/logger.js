const logger = {
  info: (...args) => console.log(`\x1b[32m[INFO] [${new Date().toISOString()}]\x1b[0m`, ...args),
  error: (...args) => console.error(`\x1b[31m[ERROR] [${new Date().toISOString()}]\x1b[0m`, ...args),
  warn: (...args) => console.warn(`\x1b[33m[WARN] [${new Date().toISOString()}]\x1b[0m`, ...args),
  debug: (...args) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`\x1b[36m[DEBUG] [${new Date().toISOString()}]\x1b[0m`, ...args);
    }
  }
};

module.exports = logger;
