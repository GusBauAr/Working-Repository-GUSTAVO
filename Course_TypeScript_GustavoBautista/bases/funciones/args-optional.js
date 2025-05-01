"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, ", ").concat(lastName || 'no lastname');
    };
    var name = fullName('gustavo');
    console.log([name]);
})();
//# sourceMappingURL=args-optional.js.map