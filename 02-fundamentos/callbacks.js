


    // setTimeout(() => {
    // console.log('hola');
    // }, 1000);

    const getUsuarioByID = ( id, callback) => {
        //creo una funccion getUsuario..
        //creo un objeto usuario con valor id del parametro y nombre juan..
        const usuario = {
            id,
            nombre: 'Juan'
        }
        //Hacemos un timeout de 1,5seg que hara un callback de usuario.
        setTimeout(() => {
            callback(usuario);//Devuelve el valor del usuario 
        }, 1500);
    }

    getUsuarioByID( 10, (usuario) => {
        //Una vez pasado el tiempo y el callback mande el usuario lo recibe y muestra.
        console.log( usuario.id);
        console.log( usuario.nombre.toUpperCase());

    });