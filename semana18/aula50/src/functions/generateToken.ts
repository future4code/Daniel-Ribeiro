import * as jwt from "jsonwebtoken";
import {AuthenticationData} from '../types/types'
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "24h"

const generateToken = (id: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
export default generateToken