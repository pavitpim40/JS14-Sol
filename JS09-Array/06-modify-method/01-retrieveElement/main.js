// LAB-1
const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];

const a = sports.slice(1, 4);
console.log('PARTIAL CLONE', a);
console.log('ORIGINAL ARR', sports);

const b = sports.splice(1, 3);
console.log('REMOVED ARR', b);
console.log('ORIGINAL ARR', sports);
