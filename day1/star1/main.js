import fs from "node:fs";

const [inputArray1, inputArray2] = fs
  .readFileSync("./input")
  .toString()
  .split("\n")
  .reduce(
    (acc, line) => {
      const [listItem1, listItem2] = line.split("   ");
      const [list1, list2] = acc;
      return [
        [...list1, parseInt(listItem1)],
        [...list2, parseInt(listItem2)],
      ];
    },
    [[], []]
  )
  .map((array) => array.sort());

const result = inputArray1.reduce(
  (acc, value, index) => acc + Math.abs(value - inputArray2[index]),
  0
);

console.log(result);
