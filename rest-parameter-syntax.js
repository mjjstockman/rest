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


let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    for(let itm of arr) {
        if(itm.name == student) {
          return itm.subjects;
        }
    }
};

let [first, second, ...rest] = makeList(students, 'John');
console.log(first, second, rest);

