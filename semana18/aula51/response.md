# Exercícios da aula 51

## Primeiro exercício:

### Resposta letra a:

Levando em consideração que podemos formar combinações mais comlexas com letras e números, o que torma mais difícil a quebra de senhas e chaves, consordo com a utilização de strings. No caso dos ids, como visto na aula, o uso de hexadeciamal nos ids, como usado na biblioteca uuid, é fundamental para reduzir a possibilidade de ser gerado mais de um id com a mesma sequência de caracteres. Nesse caso o timo mais correto seria uma string porque no hexadecimal um número pode ser representado por letras também.

### Resposta letra b:

```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
```

## Segundo exercício:

### Resposta letra a:

A função faz um insert no banco de dados, criando um novo usuário.

### Resposta letra b:

```
const createTables = async () =>{
    try {
        await connection.raw(`
            CREATE TABLE User (
                id VARCHAR(255) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                user_name VARCHAR(255) NOT NULL,
                nickname VARCHAR(255) NOT NULL
            );
        `)
        console.log('Tabelas criadas com sucesso!!')
    } catch (error) {
        console.log(error.message)
    }
}
```

### Resposta letra c:

```
const createUser = async (req: Request, res: Response) =>{
    try {

        const id = generateId()
        const {email, password, user_name, nickname} = req.body

        if(!id || !email || !password || !user_name || !nickname){
            throw new Error('Invalid paramters.')
        }

        const user = await connection.raw(`
            SELECT *
            FROM ${users}
            WHERE email = "${email}"
        `)

        if(user[0].length > 0){
            throw new Error('User already exist.')
        }

        await connection.raw(`
            INSERT INTO ${users} (id, email, password, user_name, nickname)
            VALUES(
                "${id}",
                "${email}",
                "${password}",
                "${user_name}",
                "${nickname}"
            );
        `)

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email,
                password,
                user_name,
                nickname
            }
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

## Terceiro exercício:

### Resposta letra a:

O `as string` serve para converter um valor para string. No caso específico, a chave pode vir como qualquer tipo e para forçar como string utilizamos o `as string`.

### Resposta letra b:

Funtion:
```
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
```

Type:
```
export type AuthenticationData = {
    id: string
}
```

## Quarto exercício:

### Resposta letra a:


```
const createUser = async (req: Request, res: Response) =>{
    try {

        const id = generateId()
        const {email, password, user_name, nickname} = req.body

        if(!id || !email || !password || !user_name || !nickname){
            throw new Error('Invalid paramters.')
        }

        const user = await connection.raw(`
            SELECT *
            FROM ${users}
            WHERE email = "${email}"
        `)

        if(user[0].length > 0){
            throw new Error('User already exist.')
        }

        await connection.raw(`
            INSERT INTO ${users} (id, email, password, user_name, nickname)
            VALUES(
                "${id}",
                "${email}",
                "${password}",
                "${user_name}",
                "${nickname}"
            );
        `)

        const token = generateToken({id})

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email,
                password,
                user_name,
                nickname
            },
            token
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Resposta letra b:

```
const createUser = async (req: Request, res: Response) =>{
    try {

        const id = generateId()
        const {email, password, user_name, nickname} = req.body

        if(!id || !password || !user_name || !nickname){
            throw new Error('Invalid paramters.')
        }

        if(!email || !email.includes('@')) throw new Error('Invalid email.') 

        const user = await connection.raw(`
            SELECT *
            FROM ${users}
            WHERE email = "${email}"
        `)

        if(user[0].length > 0){
            throw new Error('User already exist.')
        }

        await connection.raw(`
            INSERT INTO ${users} (id, email, password, user_name, nickname)
            VALUES(
                "${id}",
                "${email}",
                "${password}",
                "${user_name}",
                "${nickname}"
            );
        `)

        const token = generateToken({id})

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email,
                password,
                user_name,
                nickname
            },
            token
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

### Resposta letra C:

```
const createUser = async (req: Request, res: Response) =>{
    try {

        const id = generateId()
        const {email, password, user_name, nickname} = req.body

        if(!id || !password || !user_name || !nickname){
            throw new Error('Invalid paramters.')
        }

        if(!email || !email.includes('@')) throw new Error('Invalid email.') 
        if(!password || password.length < 6) throw new Error('Invalid password. It needs be longer than 5 digits.')

        const user = await connection.raw(`
            SELECT *
            FROM ${users}
            WHERE email = "${email}"
        `)

        if(user[0].length > 0){
            throw new Error('User already exist.')
        }

        await connection.raw(`
            INSERT INTO ${users} (id, email, password, user_name, nickname)
            VALUES(
                "${id}",
                "${email}",
                "${password}",
                "${user_name}",
                "${nickname}"
            );
        `)

        const token = generateToken({id})

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email,
                password,
                user_name,
                nickname
            },
            token
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
```

## Quinto exercício:

### Resposta letra a:

```
const getUserByEmail = async (tableName: string, email: string) => {
    const user = await connection.raw(`
            SELECT *
            FROM ${tableName}
            WHERE email = "${email}"
        `)
    
    return user[0]
}
export default getUserByEmail
```

## Sexto exercício:

### Resposta letra a e b:

```
const login = async (req: Request, res: Response) => {
    try {
        const userLogin = {
            email: req.body.email,
            password: req.body.password
        }

        if(!userLogin.email || !userLogin.email.includes('@')) throw new Error('Invalid email.')

        const user = await getUserByEmail(users, userLogin.email)

        if (user.length < 1) {
            throw new Error('User dont exist.')
        }
        
        if(userLogin.password !== user[0].password) throw new Error('Invalid password')

        const token = generateToken({id: user[0].id})

        res.status(200).send({token: token})
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
```

## Sétimo exercício:

### Resposta letra a: 

O as any, nesse caso, é para indicar que o tipo pode ser qualquer coisa.

### Resposta letra b:

```
const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
}
```

## Oitava questão:

### Resposta letra a:

```
const getUserInfos = async (tableName: string, id: string) =>{
    const result = await connection.raw(`
        SELECT *
        FROM ${tableName}
        WHERE id = ${id}
    `)

    return result[0]
}
```

### Resposta letra b:

```
const getInfoUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getData(token)

        const user = await getUserInfos(users, authenticationData.id)
        
        res.send({
            userInfo: {
                id: user[0].id,
                email: user[0].email
            }
        })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
```