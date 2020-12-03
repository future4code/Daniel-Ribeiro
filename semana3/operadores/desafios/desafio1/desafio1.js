//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

/* valorK = (77 - 32)*5/9 + 273.15

alert(`77 Fahrenheit convertida para Kelin é: ${valorK}.`)
console.log(`77 Fahrenheit convertida para Kelin é: ${valorK}.`) */

//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

/* valorF = (80)*9/5 + 32
alert(`80°C graus celcius convertido para °F é: ${valorF}.`)
console.log(`80°C graus celcius convertido para °F é: ${valorF}.`) */

//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

/* valorF2 = (30)*9/5 + 32
valorK2 = 30 + 273

alert(`30°C convertido para °F é: ${valorF2}.`)
alert(`30°C convertido para K é: ${valorK2}.`)
console.log(`30°C convertido para °F é: ${valorF2}.`)
console.log(`30°C convertido para K é: ${valorK2}.`)*/

//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

tempUsuario = Number(prompt('Digite a temperatura: '))
valorF2 = (tempUsuario)*9/5 + 32
valorK2 = tempUsuario + 273


alert(`${tempUsuario} convertido para °F é: ${valorF2}.`)
alert(`${tempUsuario} convertido para K é: ${valorK2}.`)
console.log(`${tempUsuario} convertido para °F é: ${valorF2}.`)
console.log(`${tempUsuario} convertido para K é: ${valorK2}.`)



