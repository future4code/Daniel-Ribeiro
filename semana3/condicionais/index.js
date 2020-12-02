// EXERCÍCIO DE INTERPRETAÇÃO

/* 
1º Explique o que o código faz. Qual o teste que ele realiza? 
Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de 
números a mensagem é "Não passou no teste"?

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

RESPOSTAS:

O código faz uma verificação para saber se os números digitados pelo usuário
são par ou ímpar, fazendo isso ao analizar o resto da divisão do número por 2.
Caso o resto da divisão seja 0, o console passará a mensagem "Passou no teste.".
Se o resto da divisão for diferente de 0 o console mostrará a mensagem "Não passou no teste.".

------------------------------------------------------------------------------------------------

2º O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. Para que serve o código acima?

RESPOSTA: Para que o cliente tenha acesso ao valor das frutas. 

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

RESPOSTA: "O preço da fruta Maçã é R$ 2.25"

c. Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

RESPOSTA: O valor da variável preco passaria a ser "5" no lugar de 5.5, resultando na mensagem:
"O preço da fruta Pêra é R$ 5" 

-----------------------------------------------------------------------------------------------

3º Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a. O que a primeira linha está fazendo?

RESPOSTA: Na primeira linha estamos declarando uma váriável, que será constante,
e receberá seu valor por um imput do usuário. Por fim, a variável 
também terá seu tipo alterado para Number.

b. Considere que um usuário digitou o número 10. Qual será a mensagem do terminal? 
E se fosse o número -10?

RESPOSTA: Quando o usuário digita 10 o console imprime "Esse número passou no teste.
No entanto também mostrará o erro informando que 'mensagem' não foi definida,
isso acontece porque a variável mensagem faz parte do escopo do if."

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

RESPOSTA: Como havia dito na resposta anterior, provavelmente háverá erro por conta
da variável 'mensagem' que faz parte do escopo do if e está sendo chamada fora dele por
um console.log. Se este mesmo console estivesse dentro do if não teria o erro.
*/

//EXERCÍCIOS DE CÓDIGO

/* 

4º Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
se ele/ela pode dirigir (apenas maiores de idade).

RESPOSTA: 

idade = Number(prompt('Digite sua idade:'))

if (idade >= 18) {
  console.log('Você pode dirigir.')
} else if (idade < 18){
  console.log('Você não pode dirigir.')
} else {
  console.log('digite uma idade válida!')
}

*/

/* 

5º Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".

RESPOSTA:

turno = prompt('Digite seu turno. Use M para manhã, N para noite e V para vespertino.').toLowerCase()

if (turno === 'm') {
  console.log('Bom dia!')
} else if (turno === 'v') {
  console.log('Boa tarde!')
} else if (turno === 'n') {
  console.log('Boa noite!')
} else {
  console.log('Digite um correspondente válido!')
}

*/
//----------------------------------------------------------------------------------------------------------------
/* 

6º Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

RESPOSTA: 

turno = prompt('Digite seu turno. Use M para manhã, N para noite e V para vespertino.').toLowerCase()

switch (turno){
  case 'm':
    console.log('Bom dia!')
    break
  case 'v':
    console.log('Boa tarde!')
    break
  case 'n':
    console.log('Boa noite')
    break
  default:
    console.log('Digite um correspondente válido!')
}

*/
//----------------------------------------------------------------------------------------------------------------
/* 

7º Considere a situação: você vai no cinema com um amigo ou amiga, 
porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta 
sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, 
imprima "Escolha outro filme :("


RESPOSTA:

generoFilme = prompt('Qual gênero de filme vai assistir?').toLowerCase()
precoIngresso = Number(prompt('Qual o valor do ingresso?'))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
  console.log('Bom filme!')
} else {
  console.log('Escolha outro filme :(')
}

*/


//DESAFIOS

/* 

1º Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", 
pergunte ao usuário, pelo prompt que snack ele vai comprar (pipoca, chocolate, doces, etc) 
e imprima no console as mensagens "Bom filme!" e "... com [SNACK]", trocando [SNACK] 
pelo que o usuário colocou no input.

RESPOSTA:

generoFilme = prompt('Qual gênero de filme vai assistir?').toLowerCase()
precoIngresso = Number(prompt('Qual o valor do ingresso?'))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
  let snack = prompt('Quer comprar algum snack? Qual? Caso não queira, responda não.').toLowerCase()
  if (snack === 'não') {
    console.log('Obrigado e bom filme!')
  } else if (snack) {
    console.log(`Bom filme com ${snack}`)
  }
} else {
  console.log('Escolha outro filme :(')
}

*/

//-----------------------------------------------------------------------------------------------------------------

/* 

2º 


*/
nomeCompleto = prompt('Digite seu nome completo').toUpperCase
tipoJogo = prompt('Qual o tipo de jogo? Responda IN para internacional e DO para doméstico.').toLowerCase()
etapaJogo = prompt('Qual a etapa do jogo? Responda SF para semi-final, DT para decisão de terceiro lugar e FI para final.').toLowerCase()
quantIngresso = Number(prompt('Qual a quantidade de ingressos. Responda com numerais.'))

switch (tipoJogo){
  case 'do':
    tipoJogo = 'Doméstico'
    break
  case 'in':
    tipoJogo = 'Internacional'
}

switch (etapaJogo){
  case 'sf':
    etapaJogo = 'Semi-Final'
    break
  case 'dt':
    etapaJogo = 'Decisão 3º lugar'
    break
  case 'fi':
    etapaJogo = 'Final'
}

//jogos domésticos semi-final
  if (tipoJogo === 'Doméstico' && etapaJogo === 'Semi-Final') {
    categoria = Number(prompt('Qual a categoria? Responda com os números correspondentes: 1, 2,3 ou 4.'))
    if(categoria === 1) {
      valorIngresso = 1320
      valorTotal = quantIngresso * valorIngresso
      console.log('---Dados da compra---')
      console.log(`Nome: ${nomeCompleto}`)
      console.log(`Tipo de jogo: ${tipoJogo}`)
      console.log(`Etapa do jogo: ${etapaJogo}`)
      console.log(`Categoria: ${categoria}`)
      console.log(`Ingressos: ${quantIngresso}`)
      console.log('---Valores---')
      console.log(`Valor do ingresso: R$ ${valorIngresso}`)
      console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 2) {
        valorIngresso = 880
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 3) {
        valorIngresso = 550
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 4) {
        valorIngresso = 220
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valor}`)
        console.log(`Valor total: R$ ${valor}`)
    }
      
 }

//jogos domésticos decisão terceiro lugar

  if (tipoJogo === 'Doméstico' && etapaJogo === 'Decisão 3º lugar') {
    categoria = Number(prompt('Qual a categoria? Responda com os números correspondentes: 1, 2,3 ou 4.'))
    if(categoria === 1) {
      valorIngresso = 660
      valorTotal = quantIngresso * valorIngresso
      console.log('---Dados da compra---')
      console.log(`Nome: ${nomeCompleto}`)
      console.log(`Tipo de jogo: ${tipoJogo}`)
      console.log(`Etapa do jogo: ${etapaJogo}`)
      console.log(`Categoria: ${categoria}`)
      console.log(`Ingressos: ${quantIngresso}`)
      console.log('---Valores---')
      console.log(`Valor do ingresso: R$ ${valorIngresso}`)
      console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 2) {
        valorIngresso = 440
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 3) {
        valorIngresso = 330
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 4) {
        valorIngresso = 170
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    }
      
 }

//jogos domésticos finais

if (tipoJogo === 'Doméstico' && etapaJogo === 'Final') {
    categoria = Number(prompt('Qual a categoria? Responda com os números correspondentes: 1, 2,3 ou 4.'))
    if(categoria === 1) {
      valorIngresso = 1980
      valorTotal = quantIngresso * valorIngresso
      console.log('---Dados da compra---')
      console.log(`Nome: ${nomeCompleto}`)
      console.log(`Tipo de jogo: ${tipoJogo}`)
      console.log(`Etapa do jogo: ${etapaJogo}`)
      console.log(`Categoria: ${categoria}`)
      console.log(`Ingressos ${quantIngresso}`)
      console.log('---Valores---')
      console.log(`Valor do ingresso: R$ ${valorIngresso}`)
      console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 2) {
        valorIngresso = 1320
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 3) {
        valorIngresso = 880
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    } else if (categoria === 4) {
        valorIngresso = 330
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotal}`)
    }
      
 }


//JOGOS INTERNACIONAIS

//jogos internacionais semi-finais

if (tipoJogo === 'Internacional' && etapaJogo === 'Semi-Final') {
    categoria = Number(prompt('Qual a categoria? Responda com os números correspondentes: 1, 2,3 ou 4.'))
    if(categoria === 1) {
      valorIngresso = 1320*0.24
      valorTotal = quantIngresso * valorIngresso
      console.log('---Dados da compra---')
      console.log(`Nome: ${nomeCompleto}`)
      console.log(`Tipo de jogo: ${tipoJogo}`)
      console.log(`Etapa do jogo: ${etapaJogo}`)
      console.log(`Categoria: ${categoria}`)
      console.log(`Ingressos: ${quantIngresso}`)
      console.log('---Valores---')
      console.log(`Valor do ingresso: U$ ${valorIngresso}`)
      console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 2) {
        valorIngresso = 880*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 3) {
        valorIngresso = 550*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 4) {
        valorIngresso = 220*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valor}`)
        console.log(`Valor total: U$ ${valor}`)
    }
      
    }

//jogos internacionais decisão terceiro lugar

  if (tipoJogo === 'Internacional' && etapaJogo === 'Decisão 3º lugar') {
    categoria = Number(prompt('Qual a categoria? Responda com os números correspondentes: 1, 2,3 ou 4.'))
    if(categoria === 1) {
      valorIngresso = 660*0.24
      valorTotal = quantIngresso * valorIngresso
      console.log('---Dados da compra---')
      console.log(`Nome: ${nomeCompleto}`)
      console.log(`Tipo de jogo: ${tipoJogo}`)
      console.log(`Etapa do jogo: ${etapaJogo}`)
      console.log(`Categoria: ${categoria}`)
      console.log(`Ingressos: ${quantIngresso}`)
      console.log('---Valores---')
      console.log(`Valor do ingresso: U$ ${valor}`)
      console.log(`Valor total: R$ ${valor}`)
    } else if (categoria === 2) {
        valorIngresso = 440*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingresso: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 3) {
        valorIngresso = 330*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 4) {
        valorIngresso = 170*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    }
      
    }

//jogos internacionais finais

if (tipoJogo === 'Internacional' && etapaJogo === 'Final') {
    categoria = Number(prompt('Qual a categoria? Responda com os números correspondentes: 1, 2,3 ou 4.'))
    if(categoria === 1) {
      valorIngresso = 1980*0.24
      valorTotal = quantIngresso * valorIngresso
      console.log('---Dados da compra---')
      console.log(`Nome: ${nomeCompleto}`)
      console.log(`Tipo de jogo: ${tipoJogo}`)
      console.log(`Etapa do jogo: ${etapaJogo}`)
      console.log(`Categoria: ${categoria}`)
      console.log(`Ingressos: ${quantIngresso}`)
      console.log('---Valores---')
      console.log(`Valor do ingresso: U$ ${valorIngresso}`)
      console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 2) {
        valorIngresso = 1320*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 3) {
        valorIngresso = 880*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingresso: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    } else if (categoria === 4) {
        valorIngresso = 330*0.24
        valorTotal = quantIngresso * valorIngresso
        console.log('---Dados da compra---')
        console.log(`Nome: ${nomeCompleto}`)
        console.log(`Tipo de jogo: ${tipoJogo}`)
        console.log(`Etapa do jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Ingressos: ${quantIngresso}`)
        console.log('---Valores---')
        console.log(`Valor do ingresso: U$ ${valorIngresso}`)
        console.log(`Valor total: U$ ${valorTotal}`)
    }
      
    }