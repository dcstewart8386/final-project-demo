function outputHTML() {

    // Check that the category index in the URL is valid
    let catIndex = urlParams.catIndex
    if (catIndex == null || isNaN(catIndex) || catIndex < 0 || catIndex > cats.length-1) {
        document.write("Invalid category index")
        return
    }

    // Update the heading with the name of the category
    setHTML("heading", `Todos: ${cats[catIndex].name}`)

    // Append data to the table
    let todos = cats[catIndex].todos
    for (let i = 0; i < todos.length; i++) {
        let checkboxStatus = ""
        if (todos[i].isDone) {
            checkboxStatus = "checked"
        }
        appendHTML("todo-table", `
            <tr>
                <td>${todos[i].desc}</td>
                <td>${todos[i].due}</td>
                <td><input type="checkbox" ${checkboxStatus} onclick="toggleTodo(${catIndex}, ${i})"></td>
                <td><a href="#" onclick="deleteTodo(${catIndex}, ${i})">Delete</a></td>
            </tr>`
        )
    }
}

function deleteTodo(catIndex, todoIndex) {
    let arr = cats[catIndex].todos
    arr.splice(todoIndex, 1)
    saveLocal(cats)
    location.reload()
}

function toggleTodo(catIndex, todoIndex) {
    let curStatus = cats[catIndex].todos[todoIndex].isDone
    cats[catIndex].todos[todoIndex].isDone = !curStatus
    saveLocal(cats)
    location.reload()
}

outputHTML()