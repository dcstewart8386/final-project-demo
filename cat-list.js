function outputHTML() {
        
    for (let i = 0; i < cats.length; i++) {
        appendHTML("cat-list", `
            <li>
                <a href="todo-list.html?catIndex=${i}">${cats[i].name}</a>
                (<a href="#" onclick='deleteCat(${i})'>Delete</a>)
            </li>`)
    }
}

function addCat() {
    let name = document.getElementById("new-category").value
    cats.push({
        name: name,
        todos: []
    })
    saveLocal(cats)
    location.reload()
}

function deleteCat(index) {
    cats.splice(index, 1)
    saveLocal(cats)
    location.reload()
}



outputHTML()