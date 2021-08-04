import { initDatabase } from '@truckify/knex-handler';
import { User } from '@truckify/services-types/user';
import { env } from '../config/env';
import knexfile from '../../knexfile';

type Model = User.Model.Complete;
type InsertParams = User.Database.Insert;
type UpdateParams = User.Database.Update;

const database = initDatabase(env, knexfile);
const usersTable = () => database<Model>('users');

export const insertUser = async (params: InsertParams): Promise<Model> => {
  return await usersTable().insert(params).returning('*').then(account => account[0]);
}

export const updateUser = async (params: UpdateParams): Promise<Model> => {
  const { id, ...updateData } = params;
  const data = { ...updateData, updatedAt: database.fn.now() };
  return await usersTable().where('id', id).whereNull('deletedAt').update(data).returning('*').then(account => account[0]);
}

export const findUserById = async (id: string): Promise<Model | undefined> => {
  return await usersTable().where('id', id).whereNull('deletedAt').first();
}

export const findUserByEmail = async (email: string): Promise<Model | undefined> => {
  return await usersTable().where('email', email).whereNull('deletedAt').first();
}