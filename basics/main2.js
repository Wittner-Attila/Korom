const someone = {
    name: 'John Wick',
    age: 30,
    city: 'New York',
    occupation: 'Assassin',
    status: 'Excommunicado',
};

console.log(someone);

const people = [
    { name: 'Winston', age: 55 },
    { name: 'Santino', age: 40 },
    { name: 'Aurelio', age: 45 },
    { name: 'Bowery King', age: 60 },
    { name: 'Charon', age: 50 },
    { name: 'Iosef Tarasov', age: 22 },
    { name: 'Cassian', age: 24 },
    { name: 'Nobody', age: 35 },
    { name: 'Marquis', age: 48 },
];

people.forEach((person) => console.log(person.name));

const joungend = people.filter((person) => person.age < 25);

console.log(joungend);

const find = people.find((person) => person.age === 50);

console.log(find);
