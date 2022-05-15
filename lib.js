const urlParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

function setHTML(id, str) {
    try {
        document.getElementById(id).innerHTML = str
    }
    catch {
        throw new Error(`Could not set HTML to the tag with id "${id}". Check to see if a tag with this id exists.`)
    }
}

function appendHTML(id, str) {
    try {
        document.getElementById(id).innerHTML += str
    }
    catch {
        throw new Error(`Could not append HTML to the tag with id "${id}". Check to see if a tag with this id exists.`)
    }
}

function saveLocal(data) {
    window.localStorage.setItem("model", JSON.stringify(data))
}

function loadLocal(fallbackData) {
    let data = window.localStorage.getItem("model")
    if (data === null) {
        return fallbackData
    }
    return JSON.parse(data)
}

function clearLocal() {
    window.localStorage.removeItem("model")
}