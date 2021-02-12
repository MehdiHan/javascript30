const people = [
  {
    name: 'Wes',
    year: 1988,
  },
  {
    name: 'Kait',
    year: 1986,
  },
  {
    name: 'Irv',
    year: 1970,
  },
  {
    name: 'Lux',
    year: 2015,
  },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice !', id: 542328 },
];

const isAdult = (element) => 2021 - element.year >= 19;

// 1. Is at least one person is 19 ? with some()

people.some(isAdult); // expected output true

// 2. Is everyone greater than 19 ? with every()

people.every(isAdult); // expected output false

// 3. Find the comment with ID 823423

const findID = (element) => element.id === 823423;

comments.find(findID);

// 4. Find the comment with ID 823423 and delete it .

const commentIndex = comments.findIndex(findID); // expected output 1

const newComments = comments.filter((comment, index) => index !== commentIndex);
