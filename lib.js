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
