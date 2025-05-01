(()=>{

    type hero = {
        name: string;
        age?: number;
        powers: number[]; 
        getName?: ()=> string;
    }

    //podemos definir que una variable puede tener de diferentes tipos (string, number)tambien de un tipo personalizado que hayamos creamo como ejm: (hero)
    let myCustomVariable: (string | number | hero ) ='gustavo';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'osmar',
        age:30,
        powers:[1]

    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);




})()