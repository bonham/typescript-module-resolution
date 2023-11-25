import { printMTS } from "./moduleMTS.mjs"
import { printCJS } from './moduleCJS.cjs'
import { default as moduleCTS } from './moduleCTS.cjs'
const typedModuleCTS = moduleCTS as { printCTS: () => void }

printMTS()
printCJS()
typedModuleCTS.printCTS()