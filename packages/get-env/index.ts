import { config } from 'dotenv';

config();

export const getEnv = (name: string, envObj: any): string => {
  const { MODE } = envObj;

  const modeIsCorrect = MODE === 'D' || MODE === 'P';
  if (!modeIsCorrect) throw new Error('process.env.MODE must be D for Development or P for Production.');

  const mode_name = `${MODE}_${name}`;
  
  if (name === 'MODE') return MODE as string;
  else return envObj[mode_name] || '';
}