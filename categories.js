// Populates the <ul> with the id "cat-list"
function outputHTML() {
        
    for (let i = 0; i < cats.length; i++) {
        appendHTML("cat-list", `
            <li>
                <a href="todos.html?catIndex=${i}">${cats[i].name}</a>
                (<a href="#" onclick='deleteCat(${i})'>Delete</a>)
            </li>`)
    }
}

// Add a new category
function addCat() {

    // Get the value from the text box with id="new-category"
    let name = document.getElementById("new-category").value

    // Add a new object onto the cats array. The object has the name that was typed into the textbox,
    // and an empty array of todos.
    cats.push({
        name: name,
        todos: []
    })

    // Save the data to the local browser storage and reload the page
    saveLocal(cats)
    location.reload()
}

// Deletes a category
function deleteCat(index) {

    // Delete the item with the given index from the cats array
    cats.splice(index, 1)

    // Save the data to the local browser storage and reload the page
    saveLocal(cats)
    location.reload()
}

// Since we are not inside a function here, outputHTML() will be called as soon as the page loads
outputHTML()