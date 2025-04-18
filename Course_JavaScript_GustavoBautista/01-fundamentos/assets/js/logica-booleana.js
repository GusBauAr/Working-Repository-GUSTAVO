
const regresaTrue = () => {
    console.log('Regreso true');
    return true ;
}

const regresaFalse = () => {
    console.log('Regreso false');
    return false ;
}

console.warn('not o la negacion');
console.log(true); //true negacion es transformar un valor booleano en su opuesto, es decir si es frue pasarioa afalse y si es false pasaria a true
console.log(!true);//false
console.log(!false);//true

console.log(!regresaFalse()); //true
//.......................................................................................
//operador AND

console.warn('And'); //va resultar true i todos lo valores son verdaderos
console.log(true && true); //true
console.log(true && !false);//false , si se hace la negacion (!)

console.log('==========');
console.log (regresaFalse() && regresaTrue ()); //false
console.log (regresaTrue() && regresaFalse  ()); //false


console.log('==== && ====');
regresaTrue() && regresaFalse();

console.log('4 condiciones y regresa false', true && true && true && false); //false

//........................................................................................
// operador OR
console.warn('OR') //Es lo opuesto de and siempre regresa 'true'
console.log(true || false); // con que este o este sea verdadero este es verdadero,
console.log(false || true); //igual sera true, por que hay true

console.log(regresaTrue() || regresaFalse); //true
console.log('4 condiciones y regresa false', true || true || true || false); //true
//.........................................................................................
console.warn('asignaciones')
