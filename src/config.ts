import dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
}
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
} = process.env;

export const CONFIG: IConfig = {
  user: POSTGRES_USER!,
  password: POSTGRES_PASSWORD!,
  host: POSTGRES_HOST!,
  port: parseInt(POSTGRES_PORT!),
  database: POSTGRES_DB!,
};


