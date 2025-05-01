"use strict";
(function () {
    //podemos definir que una variable puede tener de diferentes tipos (string, number)tambien de un tipo personalizado que hayamos creamo como ejm: (hero)
    var myCustomVariable = 'gustavo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'osmar',
        age: 30,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
