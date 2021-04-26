## Primeira questão:

### Resposta letra a:

```
export interface User {
    name: string,
    balance: number
}
```

### Resposta letra b:

```
export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```

