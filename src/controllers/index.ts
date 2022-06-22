import {Request, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';
import {passwordIsCorrect} from '../utils/compareHashWithSalt';
import {encryptionResult} from '../utils/encrypt';
import {userExists} from '../utils/userExists';

export const getUsers = async (req: Request, res: Response) => {
  const response: QueryResult = await pool.query(
    'select * from get_all_users()',
  );
  res.status(200).json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
  const {username, password} = req.body;
  const passwordHash = await encryptionResult(password);
  await pool.query('call SP_create_user($1, $2)', [username, passwordHash]);
  res.status(200).json({
    message: 'User created!',
    body: {
      user: {
        username,
      },
    },
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const {username, password} = req.body;
  const userFound = await userExists(username);
  if (userFound.success === 0) {
    return res.status(403).json({
      message: 'User not found!',
    });
  }

  const {password_hash} = userFound.user;
  const correctPassword = await passwordIsCorrect(password, password_hash);
  if (correctPassword) {
    const {user_id} = userFound.user;
    await pool.query('call SP_record_user_login($1)', [user_id]);
    return res.status(200).json({message: 'Login attempt successfull!'});
  }

  return res.status(403).json({message: 'Wrong username or password'});
};
