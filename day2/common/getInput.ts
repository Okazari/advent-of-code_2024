import { readFileSync } from "node:fs";

const getInput = () =>
  readFileSync("./common/input")
    .toString()
    .split("\n")
    .map((line) => line.split(" ").map((value) => parseInt(value)));

export default getInput;
