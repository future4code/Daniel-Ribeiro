//2)

const red = '\u001b[31m';
const blue = '\u001b[34m';
const reset = '\u001b[0m';

const mathOperation = process.argv[2]
const numberOne = Number(process.argv[3])
const numberTwo = Number(process.argv[4])

if(typeof mathOperation !== 'string'){
    console.log(red + 'O primeiro parâmetro não é válido.')
}
else if(process.argv.length !== 5){
    console.log(red + 'Está faltando um ou mais valores.')
}
else {
    if(mathOperation.includes('soma')){
        console.log(`${blue} ${numberOne} + ${numberTwo} é: ${numberOne + numberTwo}.`)
    }
    else if(mathOperation.includes('sub')){
        console.log(`${blue} ${numberOne} - ${numberTwo} é: ${numberOne - numberTwo}.`)
    }
    else if(mathOperation.includes('mult')){
        console.log(`${blue} ${numberOne} * ${numberTwo} é: ${numberOne * numberTwo}.`)
    }
    else if(mathOperation.includes('div')){
        console.log(`${blue} ${numberOne} / ${numberTwo} é: ${(numberOne / numberTwo).toFixed(2)}.`)
    }
    else {
        console.log('Digite uma operação válida: ex: soma ou subtração.')
    }
} 