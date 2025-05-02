"use strict";
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
    var antman = new Avenger('Antman', 'Capital');
    console.log(antman);
    var Avenger2 = (function () {
        function Avenger2(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger2.avgAge = 35;
        return Avenger2;
    }());
    var antman2 = new Avenger2('Antman', 'Capital');
    console.log(antman2);
    console.log(Avenger2.avgAge);
    var Avenger3 = (function () {
        function Avenger3(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger3.getAvgAge = function () {
            return this.name;
        };
        Avenger3.prototype.bio = function () {
            return "".concat(this.name, "(").concat(this.team, ")");
        };
        Avenger3.avgAge = 35;
        return Avenger3;
    }());
    var antman3 = new Avenger3('Antman', 'Capital');
    console.log(antman3.bio());
    console.log(Avenger3.getAvgAge());
})();
//# sourceMappingURL=main.js.map