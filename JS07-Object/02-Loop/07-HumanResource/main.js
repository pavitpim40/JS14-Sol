const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } },
};

// PSEUDO-CODE
/*
INPUT : name of employer
SEARCH : name from object employees
IF NOT FOUND
	PRINT : not found
ELSE
	PRINT : in desired string format
END
*/

let employeeName = prompt('Enter employee name');
// Zata

// employees[employeeNae]
// employees['john'] === { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } }
// employees['jane'] === undefined
if (!employees[employeeName]) {
    alert('Not found');
} else {
    let name = employeeName;
    // let salary = employees[employeeName]['salary'];
    // let address = employees[employeeName]['address'];
    // let district = address['district'];
    // let province = address['province'];

    // Destructuring
    // const { salary, address } = employees[employeeName];
    // const { district, province } = address; // {district : "Pathumwan", province : "BKK", postCode : 10320}

    const {
        salary,
        address: { district, province },
    } = employees[employeeName];
    // const { district, province } = address; // {district : "Pathumwan", province : "BKK", postCode : 10320}

    let outputString = `Name: ${name}, salary: ${salary}, address: ${district}, ${province} `;
    alert(outputString);
}
// for (let name in employees) {
//     if (!employees[name]) alert('Not found');
// }
