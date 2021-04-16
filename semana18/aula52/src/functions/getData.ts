import {AuthenticationData} from '../types/types'
import * as jwt from 'jsonwebtoken'

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    type: payload.type
  };
  return result;
}
export default getData