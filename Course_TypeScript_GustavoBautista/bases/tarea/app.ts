(() => {

    // Tipos
    const batman: string = 'Bruce';//✅🐱
    const superman: string = 'Clark';//✅🐱
    const existe: boolean = false;//✅🐱
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    parejaHeroes[0]='batman';
    parejaHeroes[1]='superman';

    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
    villano[0]='lex lutor';
    villano[1]= 5;
    villano[2]= true;
  
    // Arreglos
    const aliados: string []= ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;

    enum fuerzaHeroes{
      fuerzaAcuaman =0,
      fuerzaBatman =1,
      fuerzaFlash =5,
      fuerzaSuperman =100,
    }
    let fuerza  = fuerzaHeroes.fuerzaAcuaman;
    let fuerza  = fuerzaHeroes.fuerzaBatman;
    let fuerza  = fuerzaHeroes.fuerzaFlash;
    let fuerza  = fuerzaHeroes.fuerzaSuperman;


  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  