type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}
console.table(pokemon1)
//a) Configuraria o arquivo package.json com um script: "start": "clear && tsc && node ./build/index.js". O clear limparia o meu terminal, o tsc, pelo que eu entendi, faria o processo de transpilação, convertendo o código de typescript para javascript e node ./build/index.js rodaria o arquivo js já trasnpilado.

//b) Se estivesse dentro da pasta src seria preciso configurar a propriedade rootDir, no arquivo tsconfig.json, atribuindo ao mesmo o path da pasta src. 

//d)) Em comparação com o arquivo gerado na aula, o arivo gerado na minha máquina veio com algumas propiedades ativadas que não vimos na aula, tais como: "forceConsistentCasingInFileNames": true e "esModuleInterop": true. Teve uma propriedade que me chamou atenção, a "outFile": "./", que pelo que entendi concatena a saída de todos os arquivos ts em um único arquivo js. 