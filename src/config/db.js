import env from './env.js';

export default {
  username: env.postgres.user,
  password: env.postgres.password,
  database: env.postgres.db,
  host: env.postgres.host,
  port: 5432,
  dialect: 'postgres',

  // 🔴 THIS LINE IS CRITICAL
  ssl: true,

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // required for AWS RDS
    },
  },

  logging: false,
};