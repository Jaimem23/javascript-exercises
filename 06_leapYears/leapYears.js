const leapYears = function(year) {
    const leapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
