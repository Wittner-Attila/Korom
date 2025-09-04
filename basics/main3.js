const x = 3;
const name = 'John Wick';

let y = x + 40;

console.log(`${name} is ${y} years old.`);

function greet(person = 'stranger') {
    console.log(`Hello, ${person}!`);
}

greet();
greet('Winston');

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(numbers);
console.log(newNumbers);

for (let i = 0; i <= 150; i++) {
    console.log(`${i}`.padStart(3, '0'));
}

const people = [
    { name: 'Winston', age: 55 },
    { name: 'Santino', age: 40 },
];

const newPeople = [...people, { name: 'Aurelio', age: 45 }, { name: 'Bowery King', age: 60 }];

console.log(people);
console.log(newPeople);

const input = undefined;
const user = input ?? 'Guest';
console.log(user);

const text = 'apple, pear, apple, banana, orange, pear, apple';

console.log(text.replaceAll('apple', '-'));
