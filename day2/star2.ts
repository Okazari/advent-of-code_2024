import { getInput, isSafeArray } from "./common";

const result = getInput().filter(
  (array) =>
    array
      .map((_, index) => array.filter((_, i) => i !== index))
      .map(isSafeArray)
      .filter((isSafe) => isSafe).length > 0
).length;

console.log(result);
