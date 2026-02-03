import pino from 'pino';
import env from './env.js';

// Fallback is CRITICAL for containers
const logLevel = env.logLevel || 'info';

const logger = pino({
  level: logLevel,

  formatters: {
    bindings: (bindings) => ({
      pid: bindings.pid,
      host: bindings.hostname,
    }),

    level: (label) => ({
      level: label,
    }),
  },

  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;