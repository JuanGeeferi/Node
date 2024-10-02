
    /*    function sumar ( a,b = 10) {
        //darle valor en los parametros crea ese valor por defecto cuando este no se incluya
        //en la llamada de esta funcion.
        return a + b ;

    }
    */
   const sumar = (a,b=10) => {
    return a+b;
   }
//    si esta funcion es solo la linea de return se puede resumir de esta forma 
const sumarResumen = (a,b=10) => a+b;
    console.log(sumar(5));
    console.log(sumarResumen(5));

    const saludar = () => 'hola mundo';
    console.log(saludar());