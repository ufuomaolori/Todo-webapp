const addItem = document.querySelector("#addItem");
const removeItem = document.querySelector("#removeItem");
const todo = document.querySelector("#todo");
const newTodo = document.querySelector("#inputTxt");


addItem.addEventListener("click", () => {
    const textValue = newTodo.value;
    const newTodoItem = document.createElement("li");
    const newTodoTextNode = document.createTextNode(textValue);
    newTodoItem.appendChild(newTodoTextNode);
    newTodoItem.classList.add("todo-item");

    newTodoItem.addEventListener("click", () => {
        newTodoItem.classList.toggle("completed");
    });

    todo.appendChild(newTodoItem);
    newTodo.value = "";

});

removeItem.addEventListener("click", () => {
    const deleteItems = Array.from(document.getElementsByClassName("completed"));
    deleteItems.forEach(item => {
        todo.removeChild(item);
    });
});


