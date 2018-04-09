// Episode 1
const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();

// Will print out "My name is Keith" as the constant name is Keith

// Episode 2
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

// Will print out 3, const can be reassigned. return score and score = 3

// Episode 3
const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();

// Won't work. myAnimals has been declared as a const above and cannot be renamed. For loop incorrect also

// Episode 4
const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

// first console log prints out jay, val, harvey & rick as the constant is reassigned to harvey in the block
// second console log prints out keith as outside of the block function that had changed the name from Keith to Harvey



// Episode 5
const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());

// Poirot will be returned as property of object is changed, not the object itself


// Episode 6
const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);

// Won't work as murderer is a const and cannot be changed to valerie.
