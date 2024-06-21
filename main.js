const addItem = document.querySelector("#addItem");
const removeItem = document.querySelector("#removeItem");
const todo = document.querySelector("#todo");
const newTodo = document.querySelector("#inputTxt");


addItem.addEventListener("click", () => {
    const textValue = newTodo.value; //Get Textbox value
    if (textValue.trim() === "") {
        return; // Prevent adding empty todo items
    }

    const newTodoItem = document.createElement("li"); // Creates li element
    const newTodoTextNode = document.createTextNode(textValue);

    const checkBox = document.createElement("input"); // Creates checkbox
    checkBox.type = "checkbox";
    checkBox.name = "list-checkbox";
    checkBox.id = "chkBox";

    const hrLine = document.createElement("hr"); // Creates Horizontal line below list items

    newTodoItem.appendChild(checkBox);
    newTodoItem.appendChild(newTodoTextNode);
    newTodoItem.appendChild(hrLine);

    newTodoItem.classList.add("todo-item"); // styling the li elements

    checkBox.addEventListener("change", () => {
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


