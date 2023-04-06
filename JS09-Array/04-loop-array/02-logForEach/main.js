// ###2
const names = ['Mike', 'Sid', 'Jack', 'Bill'];

function logPerson(person, index) {
    console.log(`${index + 1}. ${person}`);
}

names.forEach(logPerson);

// How forEach Work
// 1st : logPerson("Mike",0,['Mike', 'Sid', 'Jack', 'Bill'])
// 2nd : logPerson("Sid",1,['Mike', 'Sid', 'Jack', 'Bill'])
// 3rd : logPerson("Jack",2,['Mike', 'Sid', 'Jack', 'Bill'])
// 4th : logPerson("Bill",3,['Mike', 'Sid', 'Jack', 'Bill'])
