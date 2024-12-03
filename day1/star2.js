import getInput from "./common/getInput.js";
import add from "./common/add.js";

const [inputArray1, inputArray2] = getInput();

const result = inputArray1
  .map((value) => value * inputArray2.filter((v) => v === value).length)
  .reduce(add, 0);

console.log(result);
