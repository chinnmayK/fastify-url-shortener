import env from './env.js';

export default {
  username: env.postgres.user,
  password: env.postgres.password,
  database: env.postgres.db,
  host: env.postgres.host,
  dialect: 'postgres',

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // required for AWS RDS
    },
  },

  logging: false,
};