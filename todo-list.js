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
        appendHTML("todo-table", `
            <tr>
                <td>${todos[i].desc}</td>
                <td>${todos[i].due}</td>
                <td>${todos[i].isDone}</td>
            </tr>`
        )
    }
}

outputHTML()