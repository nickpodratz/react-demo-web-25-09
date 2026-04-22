const names = ["Alice", "Bob", "Charlie"]

// str -> str
function capitalize(name) {
    return name.toUpperCase()
}

// str -> str
function shorten(str) {
    return str.slice(0, 3)
}

// str -> str
function makeId(input) {
    return capitalize(shorten(input))
}

const newNames = names.map(makeId)

console.log(newNames)