var a1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
var a2 = a1.map(function(i) {return i <= 5});
console.log(a1, a2);
// The variable a2 = [true, true, true, true, true, false, false, false, false, false]