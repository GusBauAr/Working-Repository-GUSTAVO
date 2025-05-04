
//cmo queremos que luzca los poderes(powers)
//creamos una interface
export  interface Power{ //podemos exportar tambien la interface
    id:number;
    description:string;
}

//es una constante con arreglo de poderes, es de tipo Power de arreglo
const powers: Power[] =[
    {
        //aqui agregamos el id y description
        id: 1,
        description: 'money',
    },
    {
        //aqui agregamos el id y description
        id: 2,
        description: 'Drugs',
    },
    
];


//si nosotros queremos exportar por defecto hay que borrar el (export) de const powers
//y hay que crear uno por defauld
export  default powers; //export defauld





