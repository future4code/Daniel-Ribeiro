//EXERCÍCIOS DE INTERPRETAÇAO

/* 

1º Leia o código abaixo:

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

REPOSTA: 

No console será impresso os números 10 e 50.

b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) 
e minhaFuncao(10)? O que apareceria no console?

RESPOSTA: 

Como não há nenhum comando para que os valores sejam mostrados no console, nada irá acontecer.
No console não aparecerá nenhum valor.


2º Leia o código abaixo:

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

a) Explicite quais são as saídas impressas no console.

RESPOSTA: 

Como a condição do for é i < 2, os itens mostrados no console serão "Darva" e "Caio",
que correspondem aos índices 0 e 1. 

b) Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?

RESPOSTA:

Da mesma forma da letra a), o for imprime no console os índices do array que são menores que 2.
Logo, dessa vez, o que seria impresso seria "Amanda" e "Caio".

3º O código abaixo mostra uma função que recebe um array e devolve outro array. 
Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}

RESPOSTA:

4º A função verifica se o resto da divisão dos itens do array é igual a zero e, caso seja, 
guarda os itens no arrayFinal multiplicando o valor do item por ele mesmo. O nome que eu para a função
seria "criarNovoArray".

*/

//EXERCÍCIO DE ESCRITA DE CÓDIGO

//a)

/* function sobreMim() {
    console.log('Oi! Eu sou Daniel, tenho 27 anos moro em Portugal e sou estudante.')
}

console.log(sobreMim()) */

//b)

/* function unificarDados(nome, idade, cidade, estuda) {

    if (estuda === true) {
        estuda = 'Sim, estudo'
    } else {
        estuda = 'Não, não estudo'
    }

    dadosPessoa = console.log(String(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e ${estuda}.`))
    return dadosPessoa
}

const nome = String(prompt('Digite seu nome: '))
let idade = Number(prompt('Digite sua idade: '))
let cidade = String(prompt('Em que cidade você mora?'))
let estuda = confirm('Você é estudante?')

unificarDados(nome, idade, cidade, estuda) */

//5º

/* 
a)

numero1 = Number(prompt('Digite um número'))
numero2 = Number(prompt('Digite outro número'))
 
function somarNum(num1, num2){
    soma = num1 + num2
    return soma
    //return soma = num1 + num2 também poderia ser assim
}

resultado = somarNum(numero1, numero2)
console.log(resultado) */

/* 
b)

numero1 = Number(prompt('Digite um número'))
numero2 = Number(prompt('Digite outro número'))
 
function verificarNum(num1, num2){
    
    if (num1 > num2) {
        res = true
    } else {
        res = false
    }
    return res
}

resulado = verificarNum(numero1, numero2)
console.log(`O primeiro número é maior que o segundo? ${resulado}`)
 */

 /* 
 c)
 
 function repetirMsg(msg) {
     for (i = 0; i < 10; i++) {
         console.log(msg)
     }
     return msg
 }

 inputMsg = String(prompt('Digite sua mensagem: '))
 repetirMsg(inputMsg) */

 //6º


 /* //a
 meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

 function quantidadeItens(meuArray) {
    for (item of meuArray) {
        console.log(meuArray.lenght)
    }
        return meuArray.lenght
    
 }

quantidadeItens(meuArray)
 */


//b)

/* outroArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function parOuImpar(outroArray) {
    arrayNovo = []

    for (num of outroArray){
        if (num % 2 === 0) {
            console.log(true)
            arrayNovo.push(num)  
        }
    
    } 

    return arrayNovo

}

parOuImpar(outroArray)
console.log(arrayNovo) */

//c)

/* meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


function verificarNumPares() {

    novoArray = []

    for (let num of meuArray) {
		if (num % 2 === 0) {
	    novoArray.push(num)
        }
    }
    return novoArray.length
}

verificarNumPares(meuArray)
console.log(novoArray.length) */

/* //d)

meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


function verificarNumPares() {

    novoArray = []
    parOuImpar(meuArray)
    
    return novoArray.length
}

verificarNumPares(meuArray) */



//DESAFIOS

//1º

//a)

/* imprimirResultado = (thing) => {
    console.log(thing)
    return thing
}
let thing = Number(prompt('Digite um número'))

imprimirResultado(thing)


//b)
let inputUsuario = (num1, num2) => {
    return soma = num1 + num2
}

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
inputUsuario(num1, num2)
imprimirResultado(soma) */

//2º

//a
/* const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function verifincandoParesAndMultiplicando() {
    novosNumeros = []

    for (num of numeros) {
        if (num % 2 === 0) {
            novosNumeros.push(num * 2)
        }
    }

    return novosNumeros
}

verifincandoParesAndMultiplicando(numeros)
console.log(novosNumeros) */

//b)

/* const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function verificarMaiorNumero() {
    maiorNumero = 0
    for(i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
           maiorNumero = numeros[i]
        }
    }
    return maiorNumero
}

verificarMaiorNumero(numeros)
console.log(maiorNumero) */

//c)

/* const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function imprimirIndiceMaiorNumero() {
    maiorNumero = 0
    for(i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
           maiorNumero = numeros[i]
        }
    }
    return maiorNumero
}

imprimirIndiceMaiorNumero(numeros)
console.log(numeros.indexOf(maiorNumero)) */

//d)

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
numerosNovos = []
function inverterArray(numeros) {
    
    for (i = 0; i < numeros.length; i++) {
       
       numerosNovos[i] = numeros[numeros.length - i - 1]
    }
    return numerosNovos
    
}

inverterArray(numeros)
console.log(numerosNovos)
