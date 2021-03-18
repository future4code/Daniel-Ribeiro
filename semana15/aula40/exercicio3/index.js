//3)

const value = process.argv[2]
const list = [
    'tomar água',
]
    const addToList = (value) =>{
        console.log('Tarefa adicionada com sucesso!')
        list.push(value)
    }

addToList(value)
console.table(list)
