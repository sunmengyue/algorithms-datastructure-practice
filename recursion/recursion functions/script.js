// 1.
// function countDown(num) {
//   if (num <= 0) return;
//   console.log(num);
//   num--;
//   countDown(num);
// }

//2.
// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// sumRange(4);

//3. factorial
// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// factorial(5);

//4. helper method recorsion
// function collectOddValue(arr) {
//   let result = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }

// collectOddValue([2, 5, 3]);

//4.5
function collectOddValue(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValue(arr.slice(1)));
  return newArr;
}
collectOddValue([2, 3, 5]);
