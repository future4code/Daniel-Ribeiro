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