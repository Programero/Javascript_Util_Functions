function add(...args) {
  let totalSum = 0;
  args.forEach((ele) => (totalSum += ele));
  return totalSum;
}

function memoizeHOC(inputFunc) {
  const memCache = {};

  return function (...args) {
    const inputString = args.join("|");
    if (!memCache[inputString]) {
      console.log("executing function");
      memCache[inputString] = inputFunc(...args);
    } else {
      console.log("serving from Cache");
    }

    return memCache[inputString];
  };
}

const memoizedAdd = memoizeHOC(add);

console.log(memoizedAdd(1, 2, 3, 4));
console.log(memoizedAdd(1, 2, 3, 4));
console.log(memoizedAdd(1, 2, 3, 4));
