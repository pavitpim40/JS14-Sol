// INPUT : object
// OUTPUT : number => total salaries

function calSalaries(employeeObject) {
    let total = 0;
    for (let employeeName in employeeObject) {
        total += employeeObject[employeeName];

        // update value
        // employeeObject[employeeName] = employeeObject[employeeName] * 2;
    }
    console.log(employeeObject);
    return total;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let net = calSalaries(salaries);

console.log(net);
