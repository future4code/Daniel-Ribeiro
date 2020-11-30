//Exercício 1

nome = 

idade =

console.log(typeof nome)
console.log(typeof idade)

nome = "Daniel"
idade = 27

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá,", nome,"você tem", idade, "anos.")

/* Resposta:

Nos dois primeiros console o tipo das variáveis é undefined. 
Isso aconteceu porque não foi atribuído nenhuma valor para as mesmas, seja number, string ou qualquer outro. 
Por causa dessa falta de atribuição, o console retorna um valor indefinido (undefined).

Já nos dois consoles seguintes, o tipo das variáveis pasou para string e number, consecutivamente. 
Isso aconteceu porque diferente da primeira parte do código, dessa vez as variáveis tiveram valores atribuídos. 
Um de texto e outro de número.
*/