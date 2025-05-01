"use strict";
(function () {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var numberr = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    numberr.push(11);
    numberr.push('dddd');
    console.log(numberr);
    var number2 = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    var number3 = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    number3.push(true);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);
    var villian = ['omega rojo', 'dormammu', 'duende verde'];
    villian.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
//# sourceMappingURL=arrays.js.map