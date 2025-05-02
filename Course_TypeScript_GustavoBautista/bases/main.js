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
})();
//# sourceMappingURL=main.js.map