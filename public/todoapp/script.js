window.onload = () => {
  document.getElementById("get-button").addEventListener("click", getTodo);
  function getTodo() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        let output = "<h2>Todos</h2>";
        data.forEach(function (todos) {
          output += `
            <ul class="list-group mb-3">
              <li class="list-group-item">ID: ${todos.id}</li>
              <li class="list-group-item">Task: ${todos.todoText}</li>
              <li class="list-group-item">Status: ${todos.completed}</li>
            
            </ul>
          `;
        });
        document.getElementById("output").innerHTML = output;
      });
  }

  document.getElementById("addNewTodo").addEventListener("submit", addPost);
  function addPost(e) {
    e.preventDefault();

    let completed = document.getElementById("completed").value;
    let body = document.getElementById("body").value;

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ completed: completed, todoText: body }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
};
