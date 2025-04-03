let date1 = new Date("01/16/2024");
let date2 = new Date();

// Calculating the time difference
// of two dates
let Difference_In_Time =
    date2.getTime() - date1.getTime();

// Calculating the no. of days between
// two dates
let Difference_In_Days =
    Math.round
        (Difference_In_Time / (1000 * 3600 * 24));
console.log(Difference_In_Days);

console.log(Math.floor(Difference_In_Days/365));