type estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: Number((soma / numeros.length).toFixed(2))
    }

    return estatisticas
}

const res: estatistica = obterEstatisticas([1, 15, 10, 2, 20, 5])
console.log(res)

//a) A entrada é um array de números e a saída é um objeto com três chaves de tipo number. 

//b) Temos as variáveis soma, que é do tipo number e estatisticas que é um objeto que tem valores do tipo number.

//c)

type amostraDeIdades = {
    numeros: number[],

    obterEstatisticas: (numeros: number[]) => estatistica
}