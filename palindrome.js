const palindrome = function (a) {
  let arrOfNum = [];
  for (let num = 0; num < a; num++) {
    let reverse = reverseOfNum(num);
    if (num == reverse && num > 10) console.log(num);
  }
};

const reverseOfNum = function (num) {
  let rev = 0;
  while (num > 0) {
    let remainder = num % 10;
    rev = rev * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return rev;
};

palindrome(50);
