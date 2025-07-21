const nums = [1, 2, 3, 4, 5];

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray(nums)); 
