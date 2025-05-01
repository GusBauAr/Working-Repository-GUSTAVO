"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, ", ").concat(lastName || '------').toUpperCase();
        }
        else {
            return "".concat(firstName, ", ").concat(lastName || 'no lastname');
        }
    };
    var name = fullName('gustavo', 'bautista', true);
    console.log([name]);
})();
//# sourceMappingURL=args-default.js.map