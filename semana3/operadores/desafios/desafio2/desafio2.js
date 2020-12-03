//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

/*
gastoResidencia = 280

res = gastoResidencia * 0.5

alert(`O valor a ser pago é: R$ ${res}.`)
console.log(`O valor a ser pago é: R$ ${res}.`) */

//b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
//Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

gastoResidencia2 = 280
resultado = (gastoResidencia2 * 0.5)
desconto = resultado/100

alert(`O valor gasto foi: R$ ${resultado}. O valor a ser pago com 15% de desconto é: R$ ${resultado-desconto}.`)
console.log(`O valor gasto foi: R$ ${resultado}. O valor a ser pago com 15% de desconto é: R$ ${resultado-desconto}.`)