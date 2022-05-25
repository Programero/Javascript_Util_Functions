let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((ele) => ele * 2);
console.log(newArr);

//Now let's try to replicate Array.prototype.map method using simple for loop

Array.prototype.myMap = function (fn) {
  let newArr = [];
  //loop over this
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i]));
  }
  return newArr;
};

newArr = arr.myMap((ele) => ele * 2);
console.log(newArr);
