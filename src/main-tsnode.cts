const { printCJS } = require('./moduleCJS.cjs')
const { printCTS } = require('./moduleCTS.cts') // cts extension for ts-node
console.log("hello")
printCJS()
printCTS()
