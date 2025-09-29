var numberFormat = function (number) {
  let isNegative = number < 0;
  let nbr = String(Math.abs(number)); 
  let arr = [];

  for (let i = 0; i < nbr.length; i++) {
    arr.push(nbr[i]);

    let digitsLeft = nbr.length - (i + 1);
    if (digitsLeft > 0 && digitsLeft % 3 === 0) {
      arr.push(',');
    }
  }

  return (isNegative ? '-' : '') + arr.join('');
};