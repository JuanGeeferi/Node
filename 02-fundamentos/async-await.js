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
    
    return new Promise ((resolve,reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;
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
    return new Promise ((resolve,reject) => {
        const salario = salarios.find( s => s.id === id)?.salario;
        (salario)
        ? resolve( salario)
        :reject( `Existe empleado pero no existe salario para empleado con id ${id}`);
    });
}

const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El salario del empleado: ${empleado} es de: ${salario}€`;

    } catch (error){
        return error;
    }
}
const id = 5;

getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch(
        err => console.log(err)
    )
