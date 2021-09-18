    let textoA = 'Comillas simples'; //let es la forma recomendada para declarar una variable
    const textoB = "Comillas dobles"; //const hacemos que una variable no se pueda modificar su valor
    var textoC = "Comillas dobles insertando comillas 'simples' ";
    var textoD = 'Comillas dobles insertando comillas "simples" ';

    console.log(textoA)
    console.log(textoB)
    console.log(textoC)
    console.log(textoD)

    //Operaciones aritmeticas
    let x, y;
    x = "5";
    y = "3.2";

    document.write(x + y + " " + typeof( x + y ) );
    document.write( "<br/>" );
    document.write(x * y + " " +typeof( x * y ) );
    console.log( x + y );
    console.log( x * y );