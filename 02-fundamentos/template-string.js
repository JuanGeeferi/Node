
    const nombre = "Deadpool";
    const real = "Wade Winston Wilson"

    const normal = nombre + ': ' + real;
    //const template = `Juan Geefer ${ 20 + 6}`;
    //Los `` sirven tambien para crear strings.
    //${ 20 + 6} lo leeria.
    const template = `${ nombre }: ${ real}`;
    //Así seria la forma de ponerlo con `` 

    console.log(normal);
    console.log(template);
    //Si comparas normal con template === a true.

    const html = `
    <h1>Hola</h1>
    <p>Que tal.</p>
    `;
    //cuidado con los saltos de linea cuando haces html.
    console.log(html);