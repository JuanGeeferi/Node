//Con var.
/*
var nombre = 'Wolverine' //Mejor no usarlo ya

if ( true ) {
   var nombre = "Magneto" ; //
}
console.log(nombre);
*/
//Con let.

/*
let nombre = 'Wolverine' 
if ( true ) {
    nombre = "Magneto" ; //si ponemos el let, solo existe dentro de este if. 
  // console.log(nombre);

}

console.log(nombre);

//el nombre seria magneto.
*/
const nombre = 'Wolverine' //usado para no cambiar valor.
//son mas ligeras que let.

if ( true ) {
   const nombre = "Magneto" ; //es una const asi que da fallo si quitamos el const 
  // console.log(nombre);

}

console.log(nombre);

//el nombre seria magneto.