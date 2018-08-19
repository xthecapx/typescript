// 1. Using map
// What we have
const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// What we need
const result = [20, 24, 56, 88];


// Usando forEach

const officersIdsForEach = [];

officers.forEach(function (officer) {
  officersIdsForEach.push(officer.id);
});

// Usando map
const officersIdsMap = officers.map(officer => officer.id);

console.log(result, officersIdsForEach, officersIdsMap);

//2. Using Reduce

// What we have
const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

// We need to know the total years of experience of all of them.

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

console.log('Total years: ', totalYears);

// We have
const constructicons = [
  {
    name: 'Scrapper',
    form: 'Freightliner Truck',
    team: 'Decepticon',
    bodyPart: 'rightLeg'
  },
  {
    name: 'Hook',
    form: 'Mobile Crane',
    team: 'Decepticon',
    bodyPart: 'upperTorso'
  },
  {
    name: 'Bonecrusher',
    form: 'Bulldozer',
    team: 'Decepticon',
    bodyPart: 'leftArm'
  },
  {
    name: 'Scavenger',
    form: 'Excavator',
    team: 'Decepticon',
    bodyPart: 'rightArm'
  },
  {
    name: 'Mixmaster',
    form: 'Concrete Mixer',
    team: 'Decepticon',
    bodyPart: 'leftLeg'
  },
  {
    name: 'Long Haul',
    form: 'Dump Truck',
    team: 'Decepticon',
    bodyPart: 'lowerTorso'
  }
];

// We want to create Devastator
const assemble = (combiner, transformer) => {
  // On each iteration, add the current transformer to the form object of the combiner.
  combiner.form[transformer.bodyPart] = transformer.name;
  return combiner;
}

const devastator = constructicons.reduce(assemble, {
  name: 'Devastator',
  team: 'Decepticon',
  form: {}
});


console.log(constructicons);
console.log(devastator);

// 3. Using find

// Do you know what curry is ?
const isEqual = (findString) => {
  // create a clousure to save the firts function parameters
  return (filteringObject) => {
    // due clousure you can access to the findString parameter
    return findString === filteringObject.name;
  }
};
const isEqualES6 = findString => filteringObject => findString === filteringObject.name;

const part = constructicons.filter(isEqual('Long Haul'));
const partES6 = constructicons.filter(isEqualES6('Long Haul'));

console.log(part, partES6);

// 4. Using filter

const userIds = [1, 5, 7, 3, 6];
const notEqual = (findNumber) => filteringNumber => findNumber !== filteringNumber;

const numbersDifferent = userIds.filter(notEqual(1));
console.log(userIds, numbersDifferent);

// 5. Adding a key value pair to an object

const user = {name: 'Shivek Khurana'};
const updatedUser = {...user, age: 23};

console.log(user, updatedUser);


// 6. Adding a key value pair with dynamic key

const dynamicKey = 'wearsSpectacles';
const userDinamyc = {name: 'Shivek Khurana'};
const updatedUserDinamyc = {...user, [dynamicKey]: true};

console.log(userDinamyc, updatedUserDinamyc);

// 7. Find and replace key value pair in array of objects

const posts = [
  {id: 1, title: 'Title 1'},
  {id: 2, title: 'Title 2'}
];
const updatedPosts = posts.map(p => p.id !== 1 ?
  p : {...p, title: 'Updated Title 1'}
);

console.log(posts, updatedPosts);

// 8. Delete a key value pair inside an object
const userObject = {name: 'Shivek Khurana', age: 23, password: 'SantaCl@use'};
const createCollection = (object) => (key) => {
    return {
      [key]: object[key]
    }
};
const mergeCollection = (accumulator, current) => {
  return {
    ...accumulator,
    ...current
  }
}
const reduceWithoutKey = (object, keyToDelete) => (accumulator, currentKey) => {
  return currentKey === keyToDelete ? accumulator : { ...accumulator, [currentKey]: object[currentKey] }
}

const userWithoutPassword = 
  Object.keys(userObject)
    .filter(notEqual('password'))
    .map(createCollection(userObject))
    .reduce(mergeCollection, {});

    console.log(Object.keys(userObject).filter(notEqual('password')).map(createCollection(userObject)));
    console.log(userObject, userWithoutPassword);

const noPass = Object.keys(userObject).reduce(reduceWithoutKey(userObject, 'password'), {});
console.log(noPass);