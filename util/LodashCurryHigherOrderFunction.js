function sum(a, b, c) {
  return a + b + c;
}
function curry(func) {
  let allArgs = [];
  return function temp(...args) {
    allArgs = allArgs.concat(args);
    if (allArgs.length === func.length) {
      return func(...allArgs);
    } else {
      return temp;
    }
  };
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(4)(5)); // should output 10
