const removeFromArray = function (arr, ...num) {
  for (item of num) {
    if (!arr.includes(item)) {
      continue;
    }
    // const index = arr.indexOf(item);
    arr.splice(arr.indexOf(item), 1);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
