//LISTA DE EXERCÍCIOS 

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 
1º

function conversorDeMoedas

A função converte dólar para real. A mesma recebe um parâmetro,
que será o valor em dólar aa ser convertido. Dentro da função temos
um prompt, que está pegando a cotação do dólar e guardando na variável cotacao. 
O resultado da função é retornado '"R$" + o resultado da multiplicação do parâmetro pela cotação'.

Na exibição do resultado, temos a variável meuDinheiro recebendo o resultado da função. Essa variável é passada 
em um console.log e o resultado é exibido no console.
*/

/* 
2º

Function investeDinheiro

Esta função recebe dois parâmetros, o tipo de investimento e o valor investido. Com base nisso a função verifica,
por meio de um switch case se o tipo informado pelo usuário é válido, caso seja, o valor informado é multiplicado pela sua respectiva 
porcentagem e retorna o resultado esperado após investimento. Caso o tipo seja falso, é retornado um alert com a mensagem "O TIPO
DE INVESTIMENTO INFORMADO INCORRETO". 

No caso do exemplo, temos duas entradas. A primeira, que é a variável novoMontante, passa dois parâmetros true para a função, o que vai 
gerar um output no console com o valor pós investimento, que é 165. Já no segundo caso, "Tesouro direto" não é um parâmetro válido dentro
do switch case, logo, entrará no default e retornará o alert com "O TIPO
DE INVESTIMENTO INFORMADO INCORRETO".
*/

/* 
3º

Aqui temos três arrays. O primeiro com 14 números e o segundo e terceiro vazios. Temos um for of que percorre o primeiro array (numeros). 
Dentro do for of temos um if que verifica se o resto da divisão de cada item do array numeros é igual a 0, caso seja, o array1 
recebe este número pelo método push(). Se o resto da divisão for diferente de dois, o array2 recebe o número, também pelo mátodo push().

Por fim, temos a impressão no console dos arrays:
console 1: "Quantidade total de números 14";
console 2: 6;
console 3: 8.
*/

/* 
4º

Neste caso temos um for of percorrendo todo o array numeros e, por meio de dois if's, verificando se, no primeiro caso,
cada item do array é menor do que o valor da variável numero1 (quem tem o valor Infinity), se for, a variável recebe este valor. 
No segundo if, é verificado se os itens do array são meiores que o valor da variável numero2 (que tem seu valor 0),
se for, o maior valor é guardado na variável.

O resultado no console seria: 

console 1: -10;
console 2: 1590.
*/

//--------------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIOS DE LÁGICA DE PROGRAMAÇÃO

/* 
1º

Podemos iterar com while, for ou forEach().

Exemplo com forEach:
Usei o forEach() para percorrer o array e modificar cada elemento para 0.
O console.log() está imprimindo item por item e mostrando seu índice.

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function zerarNum(valor, index, array) {
  
  array[index] = 0
  console.log(`${array[index]} seu índice é ${index}`)
}

numeros.forEach(zerarNum)
console.log(numeros)
*/

/* 
2º

A) FALSE;
B) FALSE;
C) TRUE;
D) TRUE;
E) TRUE.
*/