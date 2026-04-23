const product = {
    name: "Tischlampe",
    price: 19.99,
    isAvailable: true
}

console.log(product)

const { isAvailable: available } = product

console.log(available)

const userInput = {
    name: "maximilian"
}

const name = "Tom"

const { name: input } = userInput

if (name === input) {
    console.log("Names are the same.")
}

function printUserInput({ name }) {
    console.log(name)
}

printUserInput(userInput)