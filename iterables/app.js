var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
// 1. Using map
// What we have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What we need
var result = [20, 24, 56, 88];
// Usando forEach
var officersIdsForEach = [];
officers.forEach(function (officer) {
    officersIdsForEach.push(officer.id);
});
// Usando map
var officersIdsMap = officers.map(function (officer) { return officer.id; });
console.log(result, officersIdsForEach, officersIdsMap);
//2. Using Reduce
// What we have
var pilots = [
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
var totalYears = pilots.reduce(function (acc, pilot) { return acc + pilot.years; }, 0);
console.log('Total years: ', totalYears);
// We have
var constructicons = [
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
var assemble = function (combiner, transformer) {
    // On each iteration, add the current transformer to the form object of the combiner.
    combiner.form[transformer.bodyPart] = transformer.name;
    return combiner;
};
var devastator = constructicons.reduce(assemble, {
    name: 'Devastator',
    team: 'Decepticon',
    form: {}
});
console.log(constructicons);
console.log(devastator);
// 3. Using find
// Do you know what curry is ?
var isEqual = function (findString) {
    // create a clousure to save the firts function parameters
    return function (filteringObject) {
        // due clousure you can access to the findString parameter
        return findString === filteringObject.name;
    };
};
var isEqualES6 = function (findString) { return function (filteringObject) { return findString === filteringObject.name; }; };
var part = constructicons.filter(isEqual('Long Haul'));
var partES6 = constructicons.filter(isEqualES6('Long Haul'));
console.log(part, partES6);
// 4. Using filter
var userIds = [1, 5, 7, 3, 6];
var notEqual = function (findNumber) { return function (filteringNumber) { return findNumber !== filteringNumber; }; };
var numbersDifferent = userIds.filter(notEqual(1));
console.log(userIds, numbersDifferent);
// 5. Adding a key value pair to an object
var user = { name: 'Shivek Khurana' };
var updatedUser = __assign({}, user, { age: 23 });
console.log(user, updatedUser);
// 6. Adding a key value pair with dynamic key
var dynamicKey = 'wearsSpectacles';
var userDinamyc = { name: 'Shivek Khurana' };
var updatedUserDinamyc = __assign({}, user, (_a = {}, _a[dynamicKey] = true, _a));
console.log(userDinamyc, updatedUserDinamyc);
// 7. Find and replace key value pair in array of objects
var posts = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' }
];
var updatedPosts = posts.map(function (p) { return p.id !== 1 ?
    p : __assign({}, p, { title: 'Updated Title 1' }); });
console.log(posts, updatedPosts);
// 8. Delete a key value pair inside an object
var userObject = { name: 'Shivek Khurana', age: 23, password: 'SantaCl@use' };
var createCollection = function (object) { return function (key) {
    var _a;
    return _a = {},
        _a[key] = object[key],
        _a;
}; };
var mergeCollection = function (accumulator, current) {
    return __assign({}, accumulator, current);
};
var reduceWithoutKey = function (object, keyToDelete) { return function (accumulator, currentKey) {
    var _a;
    return currentKey === keyToDelete ? accumulator : __assign({}, accumulator, (_a = {}, _a[currentKey] = object[currentKey], _a));
}; };
var userWithoutPassword = Object.keys(userObject)
    .filter(notEqual('password'))
    .map(createCollection(userObject))
    .reduce(mergeCollection, {});
console.log(Object.keys(userObject).filter(notEqual('password')).map(createCollection(userObject)));
console.log(userObject, userWithoutPassword);
var noPass = Object.keys(userObject).reduce(reduceWithoutKey(userObject, 'password'), {});
console.log(noPass);
