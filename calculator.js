const calculator = function (a, b, opr) {
  let res;
  switch (opr) {
    case "add":
      res = a + b;
      break;
    case "sub":
      res = a - b;
      break;
    case "mul":
      res = a * b;
      break;
    case "div":
      res = a / b;
      break;
    default:
      console.log("check input");
      break;
  }
  return res;
};

console.log(calculator(12, 4, "div"));
