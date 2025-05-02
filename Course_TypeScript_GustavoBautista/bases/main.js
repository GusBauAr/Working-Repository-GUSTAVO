"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var Avenger2 = (function () {
        function Avenger2(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger2.avgAge = 35;
        return Avenger2;
    }());
    var Avenger3 = (function () {
        function Avenger3(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger3.getAvgAge = function () {
        };
        Avenger3.prototype.bio = function () {
            return "".concat(this.name, "(").concat(this.team, ")");
        };
        Avenger3.avgAge = 35;
        return Avenger3;
    }());
})();
(function () {
    var Avenger = (function () {
        function Avenger(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor Avenger llamado');
        }
        Avenger.prototype.getFullName = function () {
            return "".concat(this.name, " ").concat(this.realName);
        };
        return Avenger;
    }());
    var Xmen = (function (_super) {
        __extends(Xmen, _super);
        function Xmen(name, realName, isMutant) {
            var _this = _super.call(this, name, realName) || this;
            _this.isMutant = isMutant;
            console.log('constructor Xmen llamado');
            return _this;
        }
        Xmen.prototype.getFullNameDesdeXmen = function () {
            console.log(_super.prototype.getFullName.call(this));
        };
        return Xmen;
    }(Avenger));
    var wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
})();
//# sourceMappingURL=main.js.map