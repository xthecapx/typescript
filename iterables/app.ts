// 1. Spread operator union
  const middle = [3, 4];
  const arr = [1, 2, middle, 5, 6];
  arr;

  const spread = [1, 2, ...middle, 5, 6];
  spread;

  // 1.1 Create Alias
  const getAddres = () => {
    return {
      city: 'city',
      state: 'state',
      zip: 'zip'
    }
  }

  let {city: c, state: s, zip: z} = getAddres();
  let {city, state, zip} = getAddres();
  console.log(c, s, z);
  console.log(city);

  // 1.2 Destructuring objects
  const args = {name: 'Cristian', age: 29};
  const args2 = {name: 'Aura'};
  const myName = ({name, age = 20}) => {
    return name + age;
  }
  console.log(myName(args));
  console.log(myName(args2));

  // 1.3 Rest operator
  const restOperator = (...args) => {
    return args.length;
  }

  console.log(restOperator(1, 2, 3, 'd'));

  // 1.4 Rest paramenter
  // Must be the last in the args (a, ...rest, b) => {}
  const restParameter = (a, ...rest) => {
    return a + rest.length;
  }
  console.log(restParameter('single paramenter ', 1, 3, 5));

  // 1.5 Array destructuring
  const season = ['winter', 'spring', 'summer'];
  let [head, ...rest] = season;
  head;
  rest;

// 2. Using map
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

  console.log(officersIdsForEach);

  // Usando map
  const officersIdsMap = officers.map(officer => officer.id);

  console.log(officersIdsMap);

//2. Using Reduce

  // 2.1 What we have
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

  // 2.1 We need to know the total years of experience of all of them.
  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

  console.log('Total years: ', totalYears);

  // 2.2 We have
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

  // 2.2 We want to create Devastator
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
  console.log(devastator.form);

// 3. Using find

  // Do you know what curry is ?
  // Do you know what clousure is ?
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

  console.log(updatedPosts);

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

  console.log(Object.keys(userObject));
  console.log(Object.keys(userObject).filter(notEqual('password')));
  console.log(Object.keys(userObject).filter(notEqual('password')).map(createCollection(userObject)));
  console.log(userObject, userWithoutPassword);

  // Better solution
  const noPass = Object.keys(userObject).reduce(reduceWithoutKey(userObject, 'password'), {});
  console.log(noPass);
