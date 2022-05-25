let name = {
  firstName: "Kapil",
  lastName: "Thukral",
};

let sayMyName = function (hometown, state) {
  console.log(
    this.firstName,
    this.lastName,
    " lives in ",
    hometown,
    ", ",
    state
  );
};

sayMyName.bind(name, "Ramesh Nagar")("New Delhi");

//Now let's try to replicate Function.prototype.bind method using Function.prototype.apply
Function.prototype.myBind = function (thisKey, ...args) {
  return (...moreargs) => {
    this.apply(thisKey, args.concat(moreargs));
  };
};

sayMyName.myBind(name, "Ramesh Nagar")("New Delhi");
