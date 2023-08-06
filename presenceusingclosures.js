function numberChecker(array){
    return function(number){
      return array.includes(number);  
    };
}

// Example

const arr = [1,2,5,9,8,4,7];
const checkNum = numberChecker(arr);

console.log(checkNum(2));
console.log(checkNum(3));