import { printMTS } from "./moduleMTS.mjs";
import { printCJS } from './moduleCJS.cjs';
// import { default as moduleCTS } from './moduleCTS.cjs' // this would be needed if esModuleInterop is false
import moduleCTS from './moduleCTS.cjs';
const typedModuleCTS = moduleCTS;
printMTS();
printCJS();
typedModuleCTS.printCTS();
