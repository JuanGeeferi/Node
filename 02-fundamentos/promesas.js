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

const getEmpleado = ( id, callback ) => {
    //guardamos en la variable empleado todo sobre el empleado del parametro
    //compara el id del parametro en el array de los empleados hasta que sea true.
    const empleado = empleados.find( e => e.id === id)?.nombre;

    return new Promise ((resolve,reject) => {
        //if normal.
        
        /*
        if(empleado){
            //resolve cuando no hay errores
            resolve(empleado);
        } else {
            reject(`No existe empleado con id: ${id}`);
        }
        //reject cuando hay error.
        */
       //if simplificado
        (empleado)
            ? resolve( empleado)
            : reject( `No existe empleado con id ${id}`);
    });

    
   
}

//Actividad hacer el getsalario, no añadi comentarios.
const getSalario = ( id, callback) => {
    const salario = salarios.find( s => s.id === id)?.salario;
    return new Promise ((resolve,reject) => {
        (salario)
        ? resolve( salario)
        :reject( `Existe empleado pero no existe salario para empleado con id ${id}`);
    });
}
//const id = 4; //id empleado.

//principio
/*
getEmpleado(id)
    .then( empleado => console.log (empleado))
    .catch( err => console.log(err));

getSalario(id)
    .then( salario => console.log(salario))
    .catch( err => console.log(err));
*/

//final del capitulo promesas
/*
getEmpleado(id)
    .then( empleado => {
        getSalario(id)
        .then(salario => {
            console.log('El empleado:', empleado, 'tiene un salario de: ', salario,'€');
        })
        .catch( err => console.log(err))

    })
.catch( err => console.log(err))
*/

//Promesas en cadena.

const id = 5; //id empleado.

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id );
    })
    .then( salario => console.log(`El empleado:`,nombre,`tiene un salario de:`,salario))
    .catch( err => console.log(err));