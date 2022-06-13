addEventListener("message", (event) => {
  if (event.data == "getprime") {
    myFunc();
  } else {
    this.close();
  }
});

let myFunc = getPrime();
function getPrime() {
  let lastPrime = 1;

  return function () {
    while (true) {
      lastPrime++;
      if (checkPrime(lastPrime)) {
        postMessage(lastPrime);
        return;
      }
    }
  };
}

function checkPrime(number) {
  for (i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
