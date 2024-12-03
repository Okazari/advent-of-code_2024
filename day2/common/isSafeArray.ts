import { getInput } from "../common";

const isStepAllowed = (step: number) => step > 0 && step < 4;

const isSafeArray = (input: Array<number>) => {
  const array = input.reduce((acc, value, index) => {
    if (index === input.length - 1) return acc;
    return [...acc, value - input[index + 1]];
  }, []);
  const hasOnlyAllowedSteps = array
    .map(Math.abs)
    .reduce((acc, value) => isStepAllowed(value) && acc, true);
  const isAlwaysIncreasing = array.filter((value) => value < 0).length === 0;
  const isAlwaysDecreasing = array.filter((value) => value > 0).length === 0;
  return hasOnlyAllowedSteps && (isAlwaysIncreasing || isAlwaysDecreasing);
};

export default isSafeArray;
