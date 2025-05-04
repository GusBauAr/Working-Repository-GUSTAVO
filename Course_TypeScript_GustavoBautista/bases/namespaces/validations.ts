//en vez de crear una funcion anonima autoinvocada
//creamos un namespace
namespace Validations{

    //creamo suna funcion 
    export const validateText = ( text:string):boolean => {
        return (text.length > 3) ? true : false;
    }
    //otra funcion de flecha
    const validateDate = (myDate: Date):boolean => {
        return(isNaN(myDate.valueOf()))
        ?false
        :true;
    }

}

console.log(Validations.validateText('gus'))
//como hacemos para llamar a nuestro namespace este validateText o ValidateDate 
//hay que hacer que reconozca esos nombres entonces colocamos en nuestros namespaces (EXPORT)

