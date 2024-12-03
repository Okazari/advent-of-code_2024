import { getInput, add } from "./common";

const [inputArray1, inputArray2] = getInput();

const result = inputArray1
  .map((value, index) => Math.abs(value - inputArray2[index]))
  .reduce(add, 0);

console.log(result);
