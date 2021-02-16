// Let's say we have an array

const players = ['Embiid', 'Harris', 'Green', 'Curry', 'Simmons'];

// Let's make a copy of this array

const team = players;

// When we update the array team, players is also updated

// team[2] = 'Lowry';

// How do we fix this ? We take a copy instead of a reference

const sixers = [...players];

// When we update the array sixers, players is not updated.

sixers[2] = 'Lowry';

// Let's say we have and object

const mvp = {
  name: 'Joel Embiid',
  age: 26,
};

// Let's make o copy of this object

const captain = mvp;

// When we add or modify a property to captain, mvp is also updated

// captain.team = '76ers';

// How do we fix this ? We take a copy instead of a reference

const process = { ...mvp };

// When we add or modify a property to process, mvp is not updated

process.team = '76ers';
