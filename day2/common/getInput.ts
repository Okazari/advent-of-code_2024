import fs from "node:fs";

const getInput = () =>
  fs
    .readFileSync("./common/input")
    .toString()
    .split("\n")
    .map((line) => line.split(" "));

export default getInput;
