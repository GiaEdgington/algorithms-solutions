//https://www.hackerrank.com/challenges/mini-max-sum/problem


function miniMaxSum(arr) {

    let sum = arr.reduce((a, b) => {
    return a + b;
  });
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);
  return(min + " " + max);
}
