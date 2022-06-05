//given an array, flatten it

const arr = [1, 2, 3, [4, 5, [6, 7, 8, 9], [10, 11], 12, 13], [14, 15], 16];

function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flattenedSubArr = flatten(arr[i]);
      arr.splice(i, 1, ...flattenedSubArr);
    }
  }

  return arr;
}

console.log(flatten(arr));
