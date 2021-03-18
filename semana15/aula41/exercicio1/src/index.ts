//a)
let minhaString: string = 'Daniel'

//não é possível atribuir um valor numérico porque a variável foi tipada como string.

//b)
let meuNumero: number = 27

//não é possível atribuir uma string porque a variável foi tipada como number.

//c) e d)

enum COR_ARCO_IRIS {
    AMARELO = "amarelo",
    ANIL = "anil",
    AZUL = "azul",
    LARANJA = "laranja",
    VERDE = "verde",
    VERMELHO = "vermelho",
    VIOLETA = "violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: COR_ARCO_IRIS
}

const pessoa1: pessoa = {
    nome: 'Daniel',
    idade: 27,
    corFavorita: COR_ARCO_IRIS.AZUL
}

const pessoa2: pessoa = {
    nome: 'Juliana',
    idade: 38,
    corFavorita: COR_ARCO_IRIS.VERMELHO
}

const pessoa3: pessoa = {
    nome: 'Samuel',
    idade: 26,
    corFavorita: COR_ARCO_IRIS.VERDE
}
