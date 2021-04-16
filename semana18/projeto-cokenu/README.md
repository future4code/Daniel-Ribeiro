# Cokenu

## :memo: Funcionalidades
* Criar usuário
* Criar receitas
* Login
* Pegar próprio perfil
* Pegar perfil de outro usuário
* Pegar receita

## 💻 Documentação

O arquivo request.rest tem todos os endpoints e exemplos das requisições. Para usar endpoints que precisam de authorization primeiro é preciso fazer login.

## ✨ Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

* Node
* Express
* Typescript
* Cors
* Knex
* MySQL
* Dotenv
* JWT
* BCRIPT
* UUID

## 🚀 Como executar
* Clone o repositório:

https://github.com/future4code/Daniel-Ribeiro/pull/53

* Instale as dependências com
```
npm install
 ```
* Crie um arquivo .env
```
touch .env
 ```
* Preencha o arquivo .env
```
DB_HOST = Coloque aqui seu endereço do banco de dados
DB_USER = Coloque aqui seu usuário
DB_PASSWORD = Coloque aqui sua senha
DB_NAME = Coloque aqui o nome do banco de dados 
JWT_KEY = Coloque aqui a sua chave para assinar os tokens
BCRYPT_COST = Coloque aqui o cost de encriptação das senhas dos usuários.
 ```
* Crie as tabelas com
 ```
npm run tables
 ```
* Inicie o servidor com
 ```
npm run dev
 ```
 
 ## Desenvolvido por:
 - [Daniel Ribeiro](https://www.linkedin.com/in/daniel-ribeiro-59b739140/)
