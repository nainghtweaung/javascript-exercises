const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  }
  let numbArray = [];
  let smallNum;
  let largeNum;

  if (num1 > num2) {
    largeNum = num1;
    smallNum = num2;
  } else {
    largeNum = num2;
    smallNum = num1;
  }
  for (let i = smallNum; i <= largeNum; i++) {
    numbArray.push(i);
  }

  return numbArray.reduce((sum, currentNum) => sum + currentNum, 0);
};

// Do not edit below this line
module.exports = sumAll;
