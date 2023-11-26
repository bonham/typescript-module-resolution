// this code works with both - tsc and ts-node --esm
import { printMTS } from "./moduleMTS.mjs"
import moduleCTS from './moduleCTS.cjs'

const typedModuleCTS = moduleCTS as { printCTS: () => void }

printMTS()
typedModuleCTS.printCTS()