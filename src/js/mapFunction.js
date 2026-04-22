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

// (str, num) -> str
const toNumberedName = (name, index) => {
    const prefix = index + 1
    const nameSuffix = makeId(name)
    return `${prefix}. ${nameSuffix}`
}

const newNames1 = names.map(makeId)
const newNames2 = names.map(toNumberedName)

console.log(newNames2)


const output = [1, 2, 3, 4].map(x => x + 4)

console.log(output)


const price = 7.15
console.log(Math.ceil(price))