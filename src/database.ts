import {Pool} from 'pg';
import {CONFIG} from './config';

const {user, password, host, port, database} = CONFIG;


export const pool = new Pool({
  user,
  host,
  password,
  database,
  port,
});
