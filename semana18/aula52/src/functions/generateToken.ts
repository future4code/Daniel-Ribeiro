import * as jwt from "jsonwebtoken";
import { AuthenticationData } from '../types/types'
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "24h"

const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      type: input.type
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
export default generateToken