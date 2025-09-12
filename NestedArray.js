function getNestingLevel(arr) {
  if (!Array.isArray(arr)) return 0; 

  let maxLevel = 1; 
  for (let item of arr) {
    if (Array.isArray(item)) {
      let level = 1 + getNestingLevel(item);
      if (level > maxLevel) {
        maxLevel = level;
      }
    }
  }
  return maxLevel;
}


function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}