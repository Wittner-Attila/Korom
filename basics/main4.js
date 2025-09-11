const group = [
    { name: 'Csőke Zalán', date: '2007-09-02', height: 183 },
    { name: 'Pál Patrik', date: '2006-01-21', height: 170 },
    { name: 'Gyalog Patrik', date: '2006-06-11', height: 175 },
    { name: 'Licsicsiányi Boglárka', date: '2003-08-15', height: 143 },
    { name: 'Zsiga Norbert', date: '2005-08-25', height: 168 },
    { name: 'Ocskó Lilla', date: '2005-03-30', height: 172 },
    { name: 'Gurbán Ákos', date: '2003-09-12', height: 163 },
    { name: 'Kis Barnabás', date: '2004-04-01', height: 175 },
    { name: 'Fábián Bernát', date: '2003-11-08', height: 170 },
    { name: 'Fekete Zente', date: '2005-07-05', height: 181 },
    { name: 'Korom Ricsárd', date: '2000-07-05', height: 178 },
];

let averageHeight = 0;
let maximumHeight = group[0].height;
let minimumHeight = group[0].height;
group.sort((a, b) => a.name.localeCompare(b.name));
for (const person of group) {
    if (person.height < minimumHeight) {
        minimumHeight = person.height;
    }
    if (person.height > maximumHeight) {
        maximumHeight = person.height;
    }
    averageHeight += person.height;
    console.log(`${person.name.padEnd(25, ' ')}(${person.height}cm)`);
}
averageHeight /= group.length;
console.log('---');
console.log(`Average height: ${averageHeight.toFixed(2)}`);
console.log('---');
console.log(`Minimum height: ${minimumHeight}`);
console.log('---');
console.log(`Maximum height: ${maximumHeight}`);
console.log('---');
