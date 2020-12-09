
        
contador = 00 //contador para incrementar um id
function addTask(dayWeek) {
    
    task = document.getElementById('tarefa')
    taskValue = task.value
    console.log(taskValue)
    
    if (taskValue) {
        contador++
        id = 'task' + String(contador) //concatenando uma string task com o contador
        console.log(id)
        list = document.getElementById(dayWeek)
        list.innerHTML += `<li id="${id}" onclick="riscar(id)">${taskValue}</li>`
    } else {
        alert('Insira uma tarefa.')
    }
    task.value = ''
   
}  

//riscando os itens da lista
verificar = true
function riscar(id) {
    if (verificar) {
        document.getElementById(id).style = 'text-decoration: line-through'
        verificar = false
    } else {
        document.getElementById(id).style = 'text-decoration: none'
        verificar = true
    }
}

//limpando tasks

function deleteTasks() {
    arrayItens = document.getElementsByTagName('li')
    if(confirm('Tem certeza que quer deletar tudo?')){
        for(i = 0; i < arrayItens.length; i++) {
            arrayItens[i].innerHTML = ''
        } 
    }
    
}
