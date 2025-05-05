

//nosotros creamos una simple funcion
export const printObject = (argument: any) => {
    console.log(argument)

} 

//creamos una funcion tradicional
// export function genericFunction(argument: any){
//     return argument;
// }
//creamos una funcion generica se usa (<T>)----> se puede usa cualquier tipo de letra
//la <T> me hace recibir un tipo de dato que va ser el mismo dato del argumento----->(argument: T)
//con solo hacer eso ahora mi genericFunction es de tipo generico<T>que cuyo argumento es al mismo tipo de dato genericoy retorna de tipo generico --->T
export function genericFunction<T>(argument: T):T{
    return argument;
}


export const  genericFunctionArrow = <T>(argument: T) => argument; //funcion de flecha mas corta