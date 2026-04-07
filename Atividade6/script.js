const input = document.getElementById("taskinput");
const button = document.getElementById("addbt");
const list = document.getElementById("tasklist");

// adicionar tarefas
button.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") return;
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
    input.value = "";
});

// remover e concluir as tarefas
list.addEventListener("click", (event) => {
    const li = event.target.closest("li");

    if (!li) return;

    //marca como concluída
    if (event.target.type === "checkbox") {
        li.classList.toggle("completed");
    } else {
        // se clicar no resto remove
        li.remove();
    }
});