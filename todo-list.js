function getCatIndex() {
    // Check that the category index in the URL is valid
    let result = urlParams.catIndex
    if (result == null || isNaN(result) || result < 0 || result > cats.length-1) {
        document.write("Invalid category index")
        return -1
    }
    return result
}

function outputHTML() {

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
                <td><input type="checkbox" ${checkboxStatus} onclick="toggleTodo(${i})"></td>
                <td><a href="#" onclick="deleteTodo(${i})">Delete</a></td>
            </tr>`
        )
    }
}

function addTodo() {
    let desc = document.getElementById("new-todo-desc").value
    let due = document.getElementById("new-todo-due").value
    cats[catIndex].todos.push({
        desc: desc,
        due: due,
        isDone: false
    })
    saveLocal(cats)
    location.reload()
}

function deleteTodo(todoIndex) {
    let arr = cats[catIndex].todos
    arr.splice(todoIndex, 1)
    saveLocal(cats)
    location.reload()
}

function toggleTodo(todoIndex) {
    let curStatus = cats[catIndex].todos[todoIndex].isDone
    cats[catIndex].todos[todoIndex].isDone = !curStatus
    saveLocal(cats)
    location.reload()
}

let catIndex = getCatIndex()
if (catIndex > -1)
    outputHTML()