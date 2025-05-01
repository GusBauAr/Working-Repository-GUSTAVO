"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = 123;
    console.log({ avengers: avengers });
    avengers = Number('777A');
    console.log({ avengers: avengers });
})();
//# sourceMappingURL=numbers.js.map