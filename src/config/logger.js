import pino from 'pino';
import env from './env.js';

const logger = pino({
  level: env.logLevel || 'info', // 👈 critical fix
  formatters: {
    level(label) {
      return { level: label };
    },
    bindings(bindings) {
      return {
        pid: bindings.pid,
        host: bindings.hostname,
      };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;