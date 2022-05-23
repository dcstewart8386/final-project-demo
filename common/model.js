// This is the default data to use if none is found in the browser's local storage
let defaultCats = [
    {
        name: "Home",
        todos: [
            {
                desc: "Cut Grass",
                due: "May 24",
                isDone: false
            },
            {
                desc: "Rake Leaves",
                due: "May 24",
                isDone: true
            }
        ]
    },
    {
        name: "Work",
        todos: [
            {
                desc: "Mark Grade 12 Assignments",
                due: "ASAP",
                isDone: false
            },
            {
                desc: "Prepare Project",
                due: "May 18",
                isDone: false
            }
        ]
    }
]

// Set "cats" (short for "categories") to the data found in the browser's local storage.
// If none is found, use "defaultCats"
let cats = loadLocal(defaultCats)