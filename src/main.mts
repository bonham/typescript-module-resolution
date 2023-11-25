import { printMTS } from "./moduleMTS.mjs"
import { printCJS } from './moduleCJS.cjs' // only possible with allowJs: true
import moduleCTS from './moduleCTS.cjs'

const typedModuleCTS = moduleCTS as { printCTS: () => void }

printMTS()
printCJS()
typedModuleCTS.printCTS()