//1)

/* 
a) chamamos process.argv[e aqui dentro passamos a posição do argumento].
Importante lembrar que as duas primeiras posições do array argv já possuem valores, 
que são, respctivamente, o nome em si e o caminho do arquivo que está sendo rodado. 
*/

//b) e c)

/* const red = '\u001b[31m';
const blue = '\u001b[34m';
const reset = '\u001b[0m';

const namePerson = process.argv[2];
const age = Number(process.argv[3])

if(isNaN(age)){
    console.log(red + 'Sua idade tem que ser um número ou você esqueceu um dos parâmetros.')
} else if(process.argv.length !== 4){
    console.log(red + 'Você passou mais parâmetros do que foi pedido, tente novamente.')
}
else {
    console.log(`${blue}Olá, ${namePerson}, você tem ${age} anos. Em sete anos você terá ${age + 7}.`)
} */



