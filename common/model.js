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

let cats = loadLocal(defaultCats)