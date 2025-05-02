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
})();
//# sourceMappingURL=main.js.map