console.log('inicio de programa'); //al aparece primero

setTimeout(() => {
    console.log('Primer Timeout');  
    
    
}, 3000); //3 segundos

setTimeout(() => {
    console.log('Segundo Timeout');
    
    
}, 0); //0 segundos

setTimeout(() => {
    console.log('Tercer Timeout');
    
    
}, 0); //1 segundos


console.log('fin de programa') //aparece segundo, no tiene timeout.
