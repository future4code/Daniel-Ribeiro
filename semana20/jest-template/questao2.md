## Segunda questão:

### Resposta letra a:

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Daniel",
		balance: 50
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Daniel",
		balance: 10
	})
})
```

### Resposta letra b: 

```
test("Testing balance is equal than value", () => {
	const user: User = {
		name: "Juliene",
		balance: 30
	}

	const result = performPurchase(user, 30)
	
	expect(result).toEqual({
		name: "Juliene",
		balance: 0
	})
})
```

### Resposta letra c:

```
test("Testing balance is less than value", () => {
	const user: User = {
		name: "Samuel",
		balance: 5
	}

	const result = performPurchase(user, 35)
	
	expect(result).toBeUndefined()
})
```
