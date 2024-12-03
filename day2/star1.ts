import { getInput, isSafeArray } from "./common";

const result = getInput().filter(isSafeArray).length;

console.log(result);
