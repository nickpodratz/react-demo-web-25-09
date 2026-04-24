const names = ["Max", "Mustermann"]

const [first, middle, last] = names

console.log([first, middle, last].map(n => n?.length))