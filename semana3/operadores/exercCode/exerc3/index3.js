//3.

listaDeTarefas = []
tarefas1 = prompt('Qual a sua primeira tarefa?')
tarefas2 = prompt('Qual a sua segunda tarefa?')
tarefas3 = prompt('Qual a sua terceira tarefa?')
listaDeTarefas.push(tarefas1, tarefas2, tarefas3)
alert(listaDeTarefas)
console.log(listaDeTarefas)

indice = Number(prompt('Digite um valor de 0 a 2:'))
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
