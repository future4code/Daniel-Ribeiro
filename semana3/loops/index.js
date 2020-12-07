//EXERCÍCIOS DE INTERPRETAÇÃO

/* 
1º O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

RESPOSTA: 

O ódigo está verificando se o conteúdo da variável 'valor' é menor que 5, caso seja,
esse conteúdo é incrementado e seu valor somado. Por fim, o conteúdo da variável valor
é impressa no console.

*/
//---------------------------------------------------------------------------------
/* 
2º Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?

RESPOSTA:

Todos os números que forem maiores que 18 serão impressos no console.

b) Se eu quisesse acessar o índice de cada elemento dessa lista, 
o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

RESPOSTA:

Só com o for, não consegui. Pesquisei sobre e consegui com o método indexOf. 

const listaNumber = [1, 2, 3, 4, 5, 6]
for (let num of listaNumber){
  if (num <= 6)
    console.log(listaNumber.indexOf(num))
}

console.log(listaNumber)

*/

//DESAFIO INTERPRETAÇÃO DE CÓDIGO

/* 
RESPOSTA: 

Acredito que enquanto a variável quantidadeAtual for menor que a quantidadeTotal
o código dentro do while vai incrementar e concatenar um "0" a cada rodada. 

*/

//EXERCÍCIO DE ESCRITA DE CÓDIGO

/* 
3º

a) 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let num of arrayOriginal){
  console.log(num)
}

b) 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let num of arrayOriginal){
  console.log(num/10)
}

c)
arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
indice = 0
novoArray = []
for (num of arrayOriginal){
  if(num%2 === 0){
    novoArray[indice] = num
    indice += 1
  }
  
}*/

/*
d)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let indice = 0
let novoArray = []
for (num of arrayOriginal){
    
    novoArray[indice] = num.toString()
    console.log(`O elemento do índex ${indice.toString()} é ${num}`)
    indice += 1    
}
*/

//e)

/*
let listaNumber = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0
let menorNumero = 150

for (i = 0; i < listaNumber.length; i++){
    if (maiorNumero < listaNumber[i]) {
        maiorNumero = listaNumber[i]
        
    } else if (menorNumero > listaNumber[i]) {
        menorNumero = listaNumber[i]
    }
}
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
*/

//--------------------------------------------------------------------------------------------

//DESAFIOS

/*let numeroPessoa = Number(prompt('Digite o número que seu amigo tem que acertar:'))
let tentativas = 0
chute = 0
while (chute !== numeroPessoa) {

    chute = Number(prompt('Tente acertar, digite um número:'))
    tentativas++
    if(chute === numeroPessoa) {
        console.log('Acertou!')
        console.log(`O número de chutado foi: ${chute}`)
        console.log(`O número de tentativas foi: ${tentativas}`)
    } else if (chute > numeroPessoa) {
        console.log('O número é menor')
        console.log(`O número de chutado foi: ${chute}`)
    } else if (chute < numeroPessoa) {
        console.log('O número é maior')
        console.log(`O número de chutado foi: ${chute}`)
    }
    
}*/


/*let numeroPessoa = Math.floor ((Math.random() * 10))
let tentativas = 0
chute = 0

while (chute !== numeroPessoa) {

    chute = Number(prompt('Tente acertar, digite um número:'))
    tentativas++
    if(chute === numeroPessoa) {
        console.log('Acertou!')
        console.log(`O número de chutado foi: ${chute}`)
        console.log(`O número de tentativas foi: ${tentativas}`)
    } else if (chute > numeroPessoa) {
        console.log('O número é menor')
        console.log(`O número de chutado foi: ${chute}`)
    } else if (chute < numeroPessoa) {
        console.log('O número é maior')
        console.log(`O número de chutado foi: ${chute}`)
    }
    
}
*/

//O desafio foi legal. Achei até mais fácil que os exercícios anteriores a ele. 