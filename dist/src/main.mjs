import { printMTS } from "./moduleMTS.mjs";
import { printCJS } from './moduleCJS.cjs';
import { default as moduleCTS } from './moduleCTS.cjs';
const typedModuleCTS = moduleCTS;
// const { printCTS } = require('./moduleCTS.cts') // ?
console.log("hello");
printMTS();
printCJS();
typedModuleCTS.printCTS();
