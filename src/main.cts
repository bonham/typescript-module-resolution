const { printCJS } = require('./moduleCJS.cjs')
const { printCTS } = require('./moduleCTS.cjs') // cjs extension for tsc
console.log("hello")
printCJS()
printCTS()
