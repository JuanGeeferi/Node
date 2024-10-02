

    const deadpool ={
        nombre: 'Wade',
        apellido: 'Winston',
        edad: 50,
        poder: 'Regeneración',
        /*
        getNombre: function() {
            return `${ this.nombre} ${this.apellido} ${this.poder}`
        }*/
       //Lo mismo pero más bonito abajo.
        getNombre() {
            return `${ this.nombre} ${this.apellido} ${this.poder}`
        }
    }

    /*
    const nombre = deadpool.nombre;
    const apellido = deadpool.apellido;
    const poder = deadpool.poder;
    */
   //Hacer mas breve la extraccion.
   //const { nombre, apellido, poder, edad = 0} = deadpool;
   //Poner un valor seria por defecto si no tiene, ahora mismo tiene 50.
   //console.log(nombre, apellido, poder, edad);
   //Funcion de extraer 1 forma:
    /*
    function imprimeHeroe( heroe ) {
        const { nombre, apellido, poder, edad = 0 } = heroe;
        console.log(nombre, apellido, poder, edad);
    }

    imprimeHeroe( deadpool);
    */
    //Funcion de extraer 2 forma:
    function imprimeHeroe( {nombre, apellido, poder, edad = 0 } ) {
        //Podermos poner nombre = 'Juan' y se cambiaria. de la forma 1 no por ser const.
        nombre = 'Juan';
        console.log(nombre, apellido, poder, edad);
    }

    //imprimeHeroe( deadpool);

    const heroes = ['Deadpool', 'Superman', 'Batman'];

    // const h1 = heroes[0];
    // const h2 = heroes[1];
    // const h3 = heroes[2];
    const [, h2, h3, h4= 'Harley quinn']  = heroes;
    console.log(h2,h3, h4);
    console.log(heroes);