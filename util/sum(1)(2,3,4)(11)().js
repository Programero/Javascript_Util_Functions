//sum(1)(2,3,4)(11)() keep on accumulating inputs untill we see function call with zero arguments that is when return result

function sum(...args) {
  let totalSum = 0;
  args.forEach((ele) => (totalSum += ele));
  return totalSum;
}

function accumulateArgs(func) {
  let allArgs = [];
  return function temp(...args) {
    if (args.length > 0) {
      allArgs = allArgs.concat(args);
      return temp;
    } else {
      return func(...allArgs);
    }
  };
}

let modifiedSum = accumulateArgs(sum);
console.log(modifiedSum(1, 2)(3, 4, 5)(10)()); // should give output as 25
