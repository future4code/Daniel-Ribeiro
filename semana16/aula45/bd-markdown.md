# Exercícios da aula 46

## Primeiro exercício:

### Resposta letra a:

`ALTER TABLE Actor DROP COLUMN salary;` gera uma alteração na tabela 'Actor', e a alteração é a remoção da coluna 'salary'.

### Resposta letra b:

`ALTER TABLE Actor CHANGE gender sex VARCHAR(6);` gera uma alteração na tabela 'Actor', e a alteração é a mudança do nome da coluna 'gender' para 'sex'. Importante dizer que o limite de caractéres para os elemetos da tabala é de 6 bytes.

### Resposta letra c:

`ALTER TABLE Actor CHANGE gender gender VARCHAR(255);` funciona como no exemplo acima, mas o que é alterado é a quantidade de caractéres permitida, que passa a ser de 255 bytes. 

### Resposta letra d:

`ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

## Segundo exercício:

### Resposta letra a:

```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

### Resposta letra b:

```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

### Resposta letra c:

```
UPDATE Actor
SET 
	name = "Juliana bolos",
	birth_date = "2020-01-01",
    salary = 500000,
    gender = "male"    
WHERE id = "005";
```

### Resposta letra d:

O resultado da query foi: '0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
'. Apesar de não ter dado um erro, nenhum elemento da tabela foi alterado, tendo em vista que não existe nenhum elemento na tabela com o id informado.

## Terceira esxercício:

### Resposta letra a:

```
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```

### Resposta letra b:

```
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;
```

## Quarto exercício:

### Resposta letra a:

```
SELECT MAX(salary)  
FROM Actor;
```

### Resposta letra b:

```
SELECT MIN(salary)  
FROM Actor
WHERE gender = "female";
```

### Resposta letra c:

```
SELECT COUNT(*)  
FROM Actor
WHERE gender = "female";
```

### Resposta letra d:

```
SELECT SUM(salary)  
FROM Actor;
```

## Quinto exercício:

### Resposta letra a:

A query abaixo retorna uma tabela com a quantidade de atores separados por gênero:

```
SELECT COUNT(*) AS "Count", gender
FROM Actor
GROUP BY gender;
```

Retorno:
Count | gender
------|------
3     | male
2     | female

### Resposta letra b:

```
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

### Resposta letra c:

```
SELECT *
FROM Actor
ORDER BY salary ASC;
```

### Resposta letra d:

```
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

### Resposta letra e:

```
SELECT AVG(salary)
FROM Actor
GROUP BY gender;
```

## Sexto exercício:

### Resposta letra a:

`ALTER TABLE Movies ADD playing_limit_date DATE;`

### Resposta letra b:

```
ALTER TABLE Movies 
CHANGE avaliacao avaliacao FLOAT; 
```

### Resposta letra c: 

```
UPDATE Movies 
SET playing_limit_date = "2021-07-25"
WHERE id = "002";
```

### Resposta letra d:

```
DELETE FROM Movies 
WHERE id = "003";
```

```
UPDATE Movies 
SET sinopse = "atualizar sinopse de filme delatado"
WHERE id = "003";
```

O resultado da query acima foi: '0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0'. Isto acontece porque como o elemento de id '003' já tinha sido removido na query anterior, sendo assim, nenhum elemento foi afetado pela query.

## Sétimo exercício:

### Resposta letra a:

```
SELECT AVG(avaliacao)  AS "Média avaliação"
FROM Movies;
```

### Resposta letra b:

```
SELECT AVG(avaliacao)  AS "Média avaliação"
FROM Movies;
```

### Resposta letra c:

```
SELECT COUNT(*) AS "Count"
FROM Movies
WHERE playing_limit_date > CURRENT_DATE();
```

### Resposta letra d:

```
SELECT COUNT(*) AS "Count"
FROM Movies
WHERE lancamento > CURRENT_DATE();
```

### Resposta letra e:

```
SELECT MAX(avaliacao)
FROM Movies;
```

### Resposta letra f:

```
SELECT MIN(avaliacao)
FROM Movies;
```

## Oitavo exercício:

### Resposta letra a:

```
SELECT *
FROM Movies
ORDER BY nome ASC;
```

### Resposta letra b:

```
SELECT *
FROM Movies
ORDER BY nome DESC
LIMIT 5;
```

### Resposta letra c:

```
SELECT * 
FROM Movies 
ORDER BY lancamento DESC
LIMIT 3;
```

### Resposta letra d:

```
SELECT * 
FROM Movies 
ORDER BY avaliacao DESC
LIMIT 3;
```
