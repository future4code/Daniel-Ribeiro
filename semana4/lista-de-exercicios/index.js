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

/* 
3º

O código não funcionaria por três motivos. O primeiro, a variável quantidadeDeNumerosPares não está 
recebendo nenhum valor. O segundo motivo é que o while não está a ser incrementado, o que pode gerar 
um loop infinito. O último, a condição estava como <=, o que fazia ter um sempre um número a mais.

Fiz a correção e o código ficou assim:

const quantidadeDeNumerosPares = Number(prompt('Digite um número'))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

/* 
4º

num1 = Number(prompt('Digite o primeiro lado.')) 
num2 = Number(prompt('Digite o segundo lado.'))
num3 = Number(prompt('Digite o terceiro lado.'))

function verificarTriangulo (a, b, c) {
  
  resultado = ''
  
    if ((a === b) && (b === c) && (a === c)){
      resultado = 'O triângulo é: Equilátero'
    } else if ((a === b) || (b === c) || (a === c)) {
      resultado = 'O triângulo é: Isósceles'
    } else if ((a !== b) && (b !== c) && (a !== c)) {
      resultado = 'O triângulo é: Escaleno'
  } else {
    console.log('Isso não é um triângulo')
  }
  
  return resultado
}
  
  verificarTriangulo(num1, num2, num3)
console.log(resultado)
*/

/* 
5º

num1 = Number(prompt('Digite o primeiro número'))
num2 = Number(prompt('Digite o segundo número'))

function verificarNumeros(num1, num2) {
  if(num1 > num2){
    console.log(`O maior número é: ${num1}`)
  } else {
    console.log(`O maior número é: ${num2}`)
  }
  
  if(num1 % num2 > 0){
    console.log(`${num1} não é divisível por ${num2}`)
  } else {
    console.log(`${num1} é divisível por ${num2}`)
  }
  
  if(num2 % num1 > 0){
    console.log(`${num2} não é divisível por ${num1}`)
  } else {
    console.log(`${num2} é divisível por ${num1}`)
  }
  
  if(num1 > num2) {
    console.log(`A diferença entre eles é ${num1 - num2}`)
  } else {
    console.log(`A diferença entre eles é ${((num1 - num2) * -1)}` )
  }
  
}

verificarNumeros(num1, num2)

*/

//EXERCÍCIOS DE FUNÇÕES

/* 
1º

numeros = [1, 15, 3, 30, 5, 60, 7, 10, 9, 13, 11, 20, 30, 45, 50]

function pegandoSegundoMaiorMenor() {
  maior = 0
  menor = 0
  segundoMaior = 0
  segundoMenor = 0
  
  //Encontrando maior número
  for(num of numeros){
    if(num > maior) {
      maior = num
      menor = maior //passando o valor de maior para menor
    } 
  }
  //Pegando o menor número
    for(num of numeros) {
      if(num < menor) {
        menor = num
      }
    }
  //Pegando o sengundo meior número
  for(num of numeros){
    if(num < maior){
      segundoMaior = num
    }
  }
  //pegando o segundo menor número
  segundoMenor = segundoMaior //passando o valor do segundoMaior parasegundoMenor
  for(num of numeros){
    if((num < segundoMenor) && (num > menor)){
      segundoMenor = num
    }
  }
  
  //Imprimindo o resultado
  console.log(`O maior número é: ${maior}`)
  console.log(`O menor número é: ${menor}`)
  console.log(`O segundo maior é: ${segundoMaior}`)
  console.log(`O segundo menor é: ${segundoMenor}`)
}

pegandoSegundoMaiorMenor()
*/