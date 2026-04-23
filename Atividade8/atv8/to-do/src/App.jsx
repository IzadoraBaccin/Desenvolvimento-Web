import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    if (texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      text: texto,
      completed: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter(
      (tarefa) => tarefa.id !== id
    );

    setTarefas(novaLista);
  }

  function concluirTarefa(id) {
    const novaLista = tarefas.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, completed: !tarefa.completed }
        : tarefa
    );

    setTarefas(novaLista);
  }

  return (
    <div className="folha">
      <div className="container">
        <h1>Lista de Tarefas</h1>

        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button onClick={adicionarTarefa}>
          Adicionar
        </button>

        <ul>
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className={
                tarefa.completed ? "completed" : ""
              }
            >
              <input
                type="checkbox"
                checked={tarefa.completed}
                onChange={() =>
                  concluirTarefa(tarefa.id)
                }
              />

              <span>{tarefa.text}</span>

              <button
                onClick={() =>
                  removerTarefa(tarefa.id)
                }
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;