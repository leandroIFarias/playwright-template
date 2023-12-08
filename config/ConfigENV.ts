import dotenv from 'dotenv';
import path from 'path';

// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export class ConfigENV{
  static urlEnvironmentQA: string = process.env.URL_QA || '';
  static userName: string = process.env.USERNAME_QA || '';
  static password: string = process.env.PASSWORD_QA || '';
};
