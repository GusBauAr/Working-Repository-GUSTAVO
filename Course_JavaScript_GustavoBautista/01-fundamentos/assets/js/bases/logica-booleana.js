
const regresaTrue = () => {
    console.log('Regreso true');
    return true ;
}

const regresaFalse = () => {
    console.log('Regreso false');
    return false ;
}
//......................................
//negacion !
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

//PRO TIP
console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'hola mundo' && 150; // si es true nos va salir 150, pero si colocamos false solo va dar false
const a2 = 'hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy Falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log ({a1, a2, a3,a4, a5 });

if (regresaFalse () && regresaTrue () && (true || true || true || false)){
    console.log('hacer algo')
}else{
    console.log ('hacer otra cosa');
}