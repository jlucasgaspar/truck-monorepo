import knex, { Knex } from 'knex';

export const initDatabase = (env: any, knexfile: any): Knex<any, unknown[]> => {
  if (env.app.mode === 'D') return knex(knexfile.development);
  else return knex(knexfile.production);
}