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






