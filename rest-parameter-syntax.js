/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (num1, num2, num3) => num1 + num2 + num3
// Extra arguments are ignored
console.log(sumAll(1, 1, 1, 5, 6, 7))


// Function using ...rest
// Extra arguments are captured in a var called rest.
// rest can be accessed as any other var
const sumAllRest = (num1, num2, num3, ...rest) => {
    let sum = num1 + num2 + num3;
    for (let num of rest) {
        sum += num;
    }
    return sum;
}


let sum = sumAllRest(1, 2, 3, 4, 5, 6);
console.log(sum);


let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']

console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let allArgs = [...arr, ...letters].sort().reverse();
    return allArgs;
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);
