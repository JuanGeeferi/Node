

    //Constante array? (entiendo que es un array como en php.) de empleados.
    const empleados = [
        {
            id: 1,
            nombre: 'Juan'
        },
        {
            id: 2,
            nombre: 'Gema'
        },
        {
            id: 3,
            nombre: 'Jesus'
        },
        {
            id: 4,
            nombre: 'Wanda'
        }
    ];

    //Constante array de salarios.
    const salarios = [
        {
            id: 1,
            salario: 1300
        },
        {
            id: 2,
            salario: 2022
        },
        {
            id: 3,
            salario: 2023
        }
        //Wanda no tiene salario.
    ];

    //Funcion para traer info de empleado.
    const getEmpleado = ( id, callback ) => {
        //guardamos en la variable empleado todo sobre el empleado del parametro
        //compara el id del parametro en el array de los empleados hasta que sea true.
        const empleado = empleados.find( e => e.id === id)?.nombre;

        //Si existe empleado.
        if (empleado) {
            //return empleado; //Devuelvelo.
            callback(null,empleado); //Con null decimos que no existe error.
        } else {
            //return `Empleado con id ${ id } no existe`; //Devuelve string.
            callback(`Empleado con id ${ id } no existe`);//Por defecto existe el error.
        }
    }

    //Funcion para traer info del salario.
    const getSalario = ( id, callback ) => {
        const salario = salarios.find( s => s.id === id)?.salario;

        if ( salario ) {
            callback(null, salario);
        } else {
            callback(`Este empleado con id ${id} no tiene salario.`);
        }
    }
    const id = 4; //ID EMPLEADO.

    //Mostrar empleado.
    getEmpleado(id, (err, empleado) => {
        //Si no existe.
        if( err) {
            console.log('ERRORR!');
            return console.log(err);
        }
        // console.log('EMPLEADO EXISTE.');
        // console.log(empleado);

        //Mostrar salario.
        getSalario(id, (err, salario) => {
            //fernando.
            if(err){
                return console.log(err);
            }
            console.log('El empleado:', empleado, 'tiene un salario de: ',salario);
            //mio
            /*
            if(err){
                console.log('Error..')
                return console.log(err);
            }
            console.log('Salario existente:');
            console.log(salario);*/
        })
    })