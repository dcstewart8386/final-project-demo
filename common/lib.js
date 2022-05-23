// This file contains a few functions I wrote to simplify your task. You shouldn't need to change any of these,
// although it is possible you might want to add a couple of your own.

// This converts the query string in the URL to an object, with corresponding key => value pairs
const urlParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// Sets the HTML inside a given HTML element
// Parameters:
//  id = the id attribute of the HTML element whose content we want to set
//  str = the content to set it to
function setHTML(id, str) {
    try {
        document.getElementById(id).innerHTML = str
    }
    catch {
        throw new Error(`Could not set HTML to the tag with id "${id}". Check to see if a tag with this id exists.`)
    }
}

// Appends to the HTML inside a given HTML element
// Parameters:
//  id = the id attribute of the HTML element whose content we want to append to
//  str = the content to set it to
function appendHTML(id, str) {
    try {
        document.getElementById(id).innerHTML += str
    }
    catch {
        throw new Error(`Could not append HTML to the tag with id "${id}". Check to see if a tag with this id exists.`)
    }
}

// Saves the parameter "data" to the browser's local storage, using the key "model"
function saveLocal(data) {
    window.localStorage.setItem("model", JSON.stringify(data))
}

// Returns the data in the browser's local storage under the key "model". If none is found, returns the data
// passed in as the parameter "fallbackData"
function loadLocal(fallbackData) {
    let data = window.localStorage.getItem("model")
    if (data === null) {
        return fallbackData
    }
    return JSON.parse(data)
}

// Clears the data for this application from the browser's local storage
function clearLocal() {
    window.localStorage.removeItem("model")
}