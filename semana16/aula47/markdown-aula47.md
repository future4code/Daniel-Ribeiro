# Exercícios da aula 47

## Primeiro exercício:

### Resposta letra a:

Chave estrangeira é um método utilizado para relacionar tabelas.

### Resposta letra b:

O erro:
```
CREATE TABLE Rating (
	id INT PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (comment, rate, movie_id) 
VALUES (
    "Um dos melhores filmes que já vi. Muito divertido e crítico.",
    9,
	7
);
```

### Resposta letra c:

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint 
fails (`epps-daniel-sacramento`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) 
REFERENCES `Movies` (`id`))
```
O erro mostra que o id passado como `FOREING KEY` falhou, ou seja, foi passado um id que não não existe. 

### Resposta letra d:

`ALTER TABLE Movies DROP COLUMN avaliacao;`

### Resposta letra e:

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint 
fails (`epps-daniel-sacramento`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) 
REFERENCES `Movies` (`id`))
```

O erro mostra que o filme que está sendo deletado tem informações relacionadas ao mesmo em outra tabela. Para deletar o filme, primeiro é preciso deletar as tabelas "abaixo" da do filme.

## Segundo exercício:

### Resposta letra a:


A tabela movieCast recebe dois id, que são `FOREIGN KEY`, um para o filme e outro para o artista, dessa forma conseguimos relacionar os filmes com os artistas.


### Resposta letra b:

Exemplo de insert:
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	3,
    1
);
```

### Resposta letra c:

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint 
fails (`epps-daniel-sacramento`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` 
FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```

O erro é parecido com os anteriores. Informa que não tem como adicionar ou atualizar algo porque o id informado não existe/foi passado incorretamente.

### Resposta letra d:

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint 
fails (`epps-daniel-sacramento`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` 
FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

Não é possível deletar um ator que está relacionado a outra tabela. Primeiro é preciso remover as relações dele. 

## Terceiro exercício:

### Resposta letra a:

A Query junta as informações da tabela Movies e Rating, tendo em conta a condição (operador `ON`) de igualdade entre os id's.

### Resposta letra b:

```
SELECT Movies.id, Movies.nome, Rating.rate FROM Movies 
JOIN Rating 
ON Movies.id = Rating.movie_id;
```

## Quarto exercício:

### Resposta letra a:


```
SELECT m.id as movie_id, m.nome, r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
ORDER BY m.id asc;
```

### Resposta letra b:

```
SELECT m.id AS movie_id, m.nome, MovieCast.actor_id
FROM Movies m
RIGHT JOIN MovieCast ON m.id = MovieCast.movie_id
ORDER BY m.id ASC;
```

### Resposta letra C:

```
SELECT AVG(r.rate) AS average, m.id AS movie_id, m.nome 
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY m.nome;
```

## Quinto exercício:

### Resposta letra a:

Nesse caso, o uso de dois `JOIN` é porque estamos relacionando mais de duas tabelas,
mais especificamente três.

### Resposta letra b:

```
SELECT m.id AS movie_id, m.nome AS movie_Name, a.id AS actor_id, a.name AS actor_name 
FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
ORDER BY m.id;
```

### Resposta letra c:

`Error Code: 1054. Unknown column 'm' in 'field list'`

O erro aconteceu por ter uma vírgula onde deveria ter um ponto. 

### Resposta letra d: 

```
SELECT m.id AS movie_id, m.nome AS movie_Name, a.id AS actor_id, a.name AS actor_name , r.rate, r.comment
FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON r.id = m.id
ORDER BY m.id;
```

## Sexto exercício:

### Resposta letra a:

Nesse caso a realação poderia ser 1:1, levando em consideração que é um oscar por ano para um filme. Dá para ser uma relação N:M também se levar em consideração que o oscar pode ser dado para vários filmes ao longo dos anos e que um filme pode receber vários oscars.

### Resposta letra b:

Query usada na criação da tabela:

```
CREATE TABLE Oscar (
	name_oscar VARCHAR(255),
	date_oscar DATE,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

### Resposta letra c:

Insert:
```
INSERT INTO Oscar(name_oscar, date_oscar, movie_id)
VALUES(
	"Melhor direção",
    "2001-01-01",
    4
);
```
Retorno do insert:
nome_oscar | date | movie_id | id
---------- | ---------- | ---------- | ---------- 
Melhor filme    |	1994-01-01  |	3   |	1
Melhor figurino |	1994-01-01  |	3   |	2
Melhor filme    |	2001-01-01  |	4   |	3
Melhor direção  |	2001-01-01  |	4   |	4

### Resposta letra d:

Select:
```
SELECT * 
FROM Movies m
JOIN Oscar o ON m.id = o.movie_id
```

Retorno do select:
nome | sinopse | lancamento | oscar_nome | data_oscar 
---------- | ---------- | ---------- | ---------- | ----------
Matrix  |	Vivemos em um mundo dominado por máquinas e somos suas baterias.    |	1993-09-10  |	Melhor filme    |	1994-01-01  |
Matrix  |	Vivemos em um mundo dominado por máquinas e somos suas baterias.    |	1993-09-10  |	Melhor figurino |	1994-01-01
O auto da compadecida   |	O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, ...   |	2000-09-10  |	Melhor filme |	2001-01-01 
O auto da compadecida   |	O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, ...   |	2000-09-10  |	Melhor direção |	2001-01-01 