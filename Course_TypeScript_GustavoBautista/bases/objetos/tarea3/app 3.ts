
type auto ={
    
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?:()=> void ;
}
// Objetos
const batimovil: auto= {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: auto = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

console.log('estoy aqui');
// Villanos debe de ser un arreglo de objetos personalizados

type losVillanos = {
  nombre: string;
  edad: number;
  mutante: boolean;
}

const villanos: losVillanos[]= [{ 
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 50,
  mutante: true
}];
console.log('ahora estoy aqui');
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type  charles = {
  poder: string;
  estatura: number;
}

const charles: charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
}

const apocalipsis: Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;

console.log('estoy aqui');

//...........................................................
//!IMPORTANTE
//!ES POSIBLE DEPURAR EL CODIGO TYPESCRIPT..????
//? dar referencia ejecutamos y nos aparece en consola el .js en vez el .ts, nos muestra la linea de codigo de lo que se ejecuta que numero de linea esta, pero cuando queremos ir al typescript no es la linea.
//?es por que nuestro navegador y todos los navegadores ejecutan JavaScript
//? TyprScript esta siendo transpilado a javascript
//?y se realiza una pequeña configuracion en el (tsconfig.json)
//?buscamos que diga con el nombre ("sourceMap:true")
//?ya cuando esta todo listo ejecutamos en la terminal tsc -w para ejecutar todo el codigo y vamos a tener 3er archivo (.map)


//!IMPORTANTE
//!REMOVER LOS COMENTARIOSDE LOS ARCHIVOS DE JAVASCRIPT
//?Simepre alguna vez tenermos comentarios para ubicarnos o simplemnee comentario
//?cuando ejecutamos en consola en el navegador, podemos hacer desaparecer esos comentarios que se realiza
//?solamente es ir a (tsconfig.json) y buscar ("removeComments":true)y habilitarlo
