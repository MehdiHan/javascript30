const inventors = [
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    firstName: 'Isaac',
    lastName: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    firstName: 'Galileo',
    lastName: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    firstName: 'Marie',
    lastName: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    firstName: 'Johannes',
    lastName: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    firstName: 'Nicolaus',
    lastName: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    firstName: 'Max',
    lastName: 'Planck',
    year: 1858,
    passed: 1947,
  },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// 1. Filter the list of inventors for those who where born in the 1500's using filter()

const fifteen = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;
});

// 2. Give us an array of the inventory first and last name using map()

const fullName = inventors.map((inventor) => {
  return `${inventor.lastName}, ${inventor.firstName}`;
});

// 3. Sort the inventors by birthdate, oldest to youngest with sort()

const ordered = inventors.sort((a, b) => {
  return a.year > b.year ? 1 : -1;
});

// 4. How many years did all the inventors live ? with reduce()

const totalYears = inventors.reduce((amount, inventor) => {
  return amount + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => {
  const aDifference = a.passed - a.year;
  const bDifference = b.passed - b.year;
  return aDifference > bDifference ? -1 : 1;
});

//  6. Create a list of Boulevard in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = [...category.querySelectorAll('a')];
const result = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.match('de'));

// 7. Sorting people alphabetically by the last name

const alpha = people.sort();

// 8. Sum up the instance of these with reduce()

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'plane',
  'car',
];

const counter = data.reduce((acc, items) => {
  if (!acc.hasOwnProperty(items)) {
    acc[items] = 0;
  }
  acc[items]++;
  return acc;
}, {});
