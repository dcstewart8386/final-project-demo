function outputHTML() {
        
    for (let i = 0; i < cats.length; i++) {
        document.getElementById("cat-list").innerHTML += (`
            <li>
                <a href="todo-list.html?catIndex=${i}">${cats[i].name}</a>
                (<a href="delete-cat.html?catIndex=${i}">Delete</a>)
            </li>`)
    }
}

outputHTML()