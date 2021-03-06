import knex from 'knex'
import { config } from 'dotenv'
import { User } from './model/UserModel'

config()

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
const result = performPurchase({name: "Daniel", balance: 10}, 15)
console.log(result)

/* export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306,
      multipleStatements: true
   },
}); */