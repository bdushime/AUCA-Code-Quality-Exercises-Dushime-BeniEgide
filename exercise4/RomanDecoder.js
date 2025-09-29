function solution(roman) {
  const romanMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = romanMap[roman[i]];
    let next = romanMap[roman[i + 1]];

    if (next && current < next) {
      result -= current; 
    } else {
      result += current; 
    }
  }

  return result;
}
