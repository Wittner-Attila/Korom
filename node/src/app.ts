const x: number = 5;
console.log(x);

type Location = {
    number: number;
    city: string;
    street: string;
};

type Person = {
    name: string;
    age: number;
    height?: number;
    location?: Location;
    kids?: Array<Person>;
};
/*
const person: Person = {
    name: 'Nobody',
    age: 20,
};

const person2: Person = {
    name: 'Nobody',
    age: 12,
    height: 180,
};
*/

const people: Array<Person> = [
    {
        name: 'Nobody',
        age: 20,
        location: {
            number: 6758,
            city: 'Röszke',
            street: 'Petőfi Sándor utca.',
        },
    },
    {
        name: 'Nobody',
        age: 32,
        height: 180,
        kids: [
            {
                name: 'Somebody',
                age: 1,
            },
        ],
    },
];

const add = (a: Person, b: Person): number => a.age + b.age;

people.forEach((p) => {
    console.log(p.kids);
});
