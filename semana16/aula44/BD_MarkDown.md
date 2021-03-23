# Exercícios da aula 44

## Primeira questão:
### Resposta letra a:
##### VARCHAR(n): 
Utilizado para determinar que o tipo do item será uma string; o 'n' dentro dos parênteses representa o número máximo de caractéres que esta string pode possuir.

##### DATE:
Utilizado para determinar que o tipo do item será uma data.

##### PRIMARY KEY:
Uma chave única que identifica e diferencia um item dos demais.

##### NOT NULL:
Funciona como o required do HTML, indicando que o item que o possuir este marcador não pode ter um valor nulo.

### Resposta letra b:

O `SHOW DATABASE` retorna uma tabela com os bancos de dados. Já o `SHOW TABLES` retorna as tabelas que estão nos bancos de dados.

### Resposta letra c:

O comando `DESCRIBE` + nomeDaTabela retorna uma tabela com as informações detalhadas sobre a tabela selecionada, ex: 
`DESCRIBE ator`, retorna:

Fild      | Type | Null | Key | Default | Extra
--------- | --------- | --------- | --------- | --------- | ---------
id | varchar(255) | NO |	PRI	|	Null
name |	varchar(255) |	NO	|   |	Null
salary | float |	NO	|	|   Null
birth_date |	date |	NO |    |    Null		
gender | varchar(6) | NO |  |   Null

## Segunda questão:

### Resposta letra a:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

### Resposta letra b:

O erro foi o seguinte: 'Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
'. O mesmo aconteceu porque foi passado como key um valor que já existe no banco de dados. Tendo em vista que a key deve ser única, é impossível passar keys iguais para itens distintos.

### Resposta letra c:

O erro foi o seguinte 'Error Code: 1136. Column count doesn't match value count at row 1'. O mesmo aconteceu porque a quantidade de colunas não bate com a quantidade de valores passados.

### Resposta letra d:

O erro foi o seguinte: 'Error Code: 1364. Field 'name' doesn't have a default value'. O mesmo aconteceu porque como a propriedade 'name' é `NOT NULL`, não é possível passar um valor nuulo no name. 

### Resposta letra e:

O erro foi o seguinte: 'Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1'. O mesmo aconteceu porque o tipo da propriedade 'birth_date' é `DATE`, no entanto, ao tentar criar o novo ator, o valor de 'birth_date' está sendo passado como número.

### Resposta letra f:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

## Terceira questão: 

### Resposta letra a:

`SELECT id, name from Actor WHERE gender = "female";`

### Resposta letra b:

`SELECT salary from Actor WHERE name = "Tony Ramos"`

### Resposta letra c:

`SELECT * FROM Actor WHERE gender = "invalid";`
O retorno dessa query é basicamente nada, já que não há o valor 'invalid' para gender.

### Resposta letra d:

`SELECT id, name, salary FROM Actor WHERE salary <= 500000;`

### Resposta letra e:

O erro foi o seguinte: 'Error Code: 1054. Unknown column 'nome' in 'field list''. O mesmo aconteceu porque o parâmetro 'nome' não existe, o parâmetro correto é 'name'.

## Quarto exercício:

### Resposta letra a:

A query seleciona todas as informações da tabela 'Actor' que comecem com a letra 'A' ou 'J' e tenham salário acima de 300000.

### Resposta letra b:

```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

### Resposta letra c:

```
SELECT * FROM Actor
WHERE name LIKE "%G%";
```

### Resposta letra d:

```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary > 350000 AND salary <= 900000;
```

## Quinto exercício:

### Resposta letra a:

O tipo `TEXT` geralmete é usado para entradas de textos que não possuem um tamanho mensurável, não são apenas uma string ou poucas palavras. Como no exercício o parâmetro 'sinopse' é um conjuto de palavras de tamanho não controlado, o mais adequado é o tipo `TEXT`.

```
CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY, 
nome VARCHAR(255) NOT NULL UNIQUE, 
sinopse TEXT NOT NULL, 
lançamento DATE NOT NULL, 
avaliacao FLOAT NOT NULL
);
```

### Resposta letra b:

```
INSERT INTO Movies (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

### Resposta letra c:

```
INSERT INTO Movies (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

### Resposta letra d:

```
INSERT INTO Movies (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. 
  A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

### Resposta letra e:

```
INSERT INTO Movies (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "004", 
  "O auto da compadecida",
  "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. 
  Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, 
  inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. 
  Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
  "2000-09-10", 
  10
);
```

## Sexto exercício:

### Resposta letra a:

```
SELECT id, nome, avaliacao 
FROM Movies 
WHERE id = "004";
```

### Resposta letra b:

```
SELECT * 
FROM Movies
WHERE nome = "Doce de mãe";
```

### Resposta letra c:

```
SELECT id, nome, sinopse 
FROM Movies
WHERE avaliacao > 7;
```

## Sétimo exercício:

### Resposta letra a:

```
SELECT * 
FROM Movies
WHERE nome LIKE "%vida%";
```

### Resposta letra b:

```
SELECT * 
FROM Movies
WHERE nome LIKE "%de%" OR sinopse LIKE "%de%";
```

### Resposta letra c:

```
SELECT * 
FROM Movies
WHERE lançamento < "2021-03-23";
```

### Resposta letra d:

```
SELECT * 
FROM Movies
WHERE (lançamento < current_DATE()) AND nome LIKE "%auto%" OR sinopse LIKE "%auto%" AND sinopse > 7;
```






