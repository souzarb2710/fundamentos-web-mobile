let listaTarefas = []
function adicionarTarefa() {
    //escopo da função
    const input = document.getElementById('nova-tarefa');
    const texto = input.value.trim();
    if (texto !== "") {
        const li = document.createElement('li');
        li.innerText = texto;
        li.addEventListener('click',
            function () {
                this.classList.toggle('completa');
            }
        )
        listaTarefas.push(texto);
        document.getElementById("tarefas").appendChild(li);
        input.value = "";
    }
}

document.getElementById('adicionar-btn')
    .addEventListener('click', adicionarTarefa);