
const user = {
    name: {
        first: "Max",
        middle: "Anton",
        last: "Mustermann"
    },
    age: 31,
    height: 178
}

const { age, height, name: { first, last } } = user

console.log("first and last: ", first, last)

function displayName({ first, middle, last }) {
    return [first, middle, last].join(" ")
}

function initials({ first, middle, last }) {
    const components = [first, middle, last]
    const initials = components.map(c => c.charAt(0) + ".")
    return initials.join(" ")
}

const { name } = user

console.log("displayName:", displayName(name))
console.log("initials:", initials(name))