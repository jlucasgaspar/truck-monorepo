import { hash, compare } from 'bcrypt';

interface ComparePasswords {
  encryptedPassword: string;
  defaultPassword: string;
}

export const encryptPassword = async (password: string): Promise<string> => {
  const salt = 12;
  return await hash(password, salt);
}

export const comparePasswords = async ({ defaultPassword, encryptedPassword }: ComparePasswords): Promise<boolean> => {
  return await compare(defaultPassword, encryptedPassword);
}