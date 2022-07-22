const sumOfSquares = function (num) {
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num; j++) {
      if (i ** 2 + j ** 2 == num) console.log(i, j);
    }
  }
};

sumOfSquares(80);
