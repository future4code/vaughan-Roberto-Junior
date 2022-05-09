
// config()

// export const isEven = (integer: number): any => { }

// export const connection = knex({
//    client: "mysql",
//    connection: {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_SCHEMA,
//       port: 3306,
//       multipleStatements: true
//    },
// });


export interface User {
	name: string
	balance: number
}

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

console.log(performPurchase({name: 'Roberto', balance: 25}, 20));

