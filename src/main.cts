const { printCJS } = require('./moduleCJS.cjs')
const { printCTS } = require('./moduleCTS.cjs') // tsc
// const { printCTS } = require('./moduleCTS.cts') // ts-node
console.log("hello")
printCJS()
printCTS()
