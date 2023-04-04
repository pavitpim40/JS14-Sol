const isLeapYear = (year) => (year % 100 == 0 ? year % 400 === 0 : year % 4 === 0);

const birthDate = (birthYear) => {
    let totalDay = 0;

    for (let year = birthYear; year <= 2020; year++) {
        // 2000,2001,2002,2003
        // isLeapYear += 366
        // notLeapYear += 365
        if (isLeapYear(year)) totalDay += 366;
        else totalDay += 365;
    }

    return totalDay;
};
