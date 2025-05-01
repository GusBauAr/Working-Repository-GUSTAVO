"use strict";
(function () {
    var nada = undefined;
    console.log(nada);
    //....................................................
    // si nostoros que remos espesificar que un booleano sea undefined
    //entonces hay que espesificarlo siempre
    var isActive = undefined;
    console.log(isActive);
    //................................................................
    //strictNullCheck
    //los valores permitidos para un booleano son:
    //? true, false, undefined, null, pero con la restriccion que tenemos //strictNullCheck ya no se puede
    //! null no es lo mismo que undefined
    var isActive2 = null;
    console.log(isActive2);
})();
//# sourceMappingURL=null-undefined.js.map