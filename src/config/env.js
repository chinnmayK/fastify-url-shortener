import envSchema from 'env-schema';

const schema = {
  type: 'object',
  required: [
    'PORT',
    'NODE_ENV',
    'POSTGRES_HOST',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DB',
  ],
  properties: {
    PORT: { type: 'number', default: 5000 },
    NODE_ENV: {
      type: 'string',
      enum: ['development', 'testing', 'production', 'staging'],
    },
    POSTGRES_HOST: { type: 'string' },
    POSTGRES_DB: { type: 'string' },
    POSTGRES_USER: { type: 'string' },
    POSTGRES_PASSWORD: { type: 'string' },
  },
};

const config = envSchema({
  schema,
  // 🚨 IMPORTANT: only load dotenv locally
  dotenv:
    process.env.NODE_ENV !== 'production'
      ? { path: '.env' }
      : false,
});

export default {
  port: config.PORT,
  node_env: config.NODE_ENV,
  postgres: {
    host: config.POSTGRES_HOST,
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    db: config.POSTGRES_DB,
  },
};