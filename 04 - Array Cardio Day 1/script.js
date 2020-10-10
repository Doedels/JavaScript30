// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsOfThe1500s = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
console.log(inventorsOfThe1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(firstAndLast);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldToYoung = inventors.sort((a, b) => a.year - b.year);
console.log(oldToYoung);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce((acc, inventor) => {
    return acc + inventor.passed - inventor.year
}, 0);
console.log(totalYearsLived);

// 5. Sort the inventors by years lived
const yearsLived = inventors.map(inventor => ({ first: inventor.first, last: inventor.last, yearsLived: inventor.passed - inventor.year }));
const sortedByYearsLived = yearsLived.sort((a, b) => a.yearsLived - b.yearsLived)
console.log(sortedByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//cut and paste the following in de console of the wikipedia site to get the wanted Array
Array.from(document.querySelectorAll(".mw-category a"))
    .map(link => link.textContent)
    .filter(boulevard => boulevard.includes("de"))

// 7. sort Exercise
// Sort the people alphabetically by last name

//since the given Array is already sorted by last name I decided to sort then by first name instead
const sortByFirstname = people.sort((a, b) => {
    const firstNameA = a.split(", ")[1];
    const firstNameB = b.split(", ")[1];
    return firstNameA < firstNameB ? -1 : 1;
});
console.log(sortByFirstname);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const sumOfEach = data.reduce((acc, elem) => {
    acc[elem] ? acc[elem] = acc[elem] + 1 : acc[elem] = 1;
    return acc;
}, {});
console.log(sumOfEach);