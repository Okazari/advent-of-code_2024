import fs from "node:fs";

const getInput = () =>
  fs
    .readFileSync("./common/input")
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

export default getInput;
