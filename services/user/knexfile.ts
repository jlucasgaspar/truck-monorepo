import { config } from 'dotenv';
import { Knex } from 'knex';
// import { env } from './src/config/env';

config();

type KnexFile = {
  development: Knex.Config;
  staging: Knex.Config;
  production: Knex.Config;
}

const knexfile: KnexFile = {
  development: {
    client: process.env.D_DB_CLIENT,
    connection: {
      host: process.env.D_DB_HOST,
      port: Number(process.env.D_DB_PORT),
      database: process.env.D_DB_NAME,
      user: process.env.D_DB_USER,
      password: process.env.D_DB_PASSWORD
    },
    migrations: {
      tableName: 'migrations_user_service',
      directory: './migrations'
    }
  },

  staging: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'truckify',
      user: 'truckify',
      password: 'truckify'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations_user_service'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'truckify',
      user: 'truckify',
      password: 'truckify'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations_user_service'
    }
  }
}

export default knexfile;