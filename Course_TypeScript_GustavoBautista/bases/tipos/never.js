"use strict";
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('!Auxilio');
    console.log('hola mundo');
    var error2 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error2('!Auxilio');
})();
//# sourceMappingURL=never.js.map