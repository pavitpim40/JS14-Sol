// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
];

// FIND and REpa

// FIND
function updateTask(id, newName) {
    // const newTasks = tasks.slice()
    const newTasks = structuredClone(tasks);

    let foundedIndex = newTasks.findIndex((obj, index) => obj.id == id);

    if (foundedIndex !== -1) {
        newTasks[foundedIndex].name = newName;
        // let obj = { id: id, name: newName };
        // newTasks.splice(foundedIndex, 1, obj);
    }

    return newTasks;
}

const r = updateTask(2, 'Eat Shabu');
// updateTask(1, 'Eat Shabu');

console.log(r);
console.log(tasks);
console.log(r === tasks);
