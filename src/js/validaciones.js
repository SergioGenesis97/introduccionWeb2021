function validaForm(){

    var texto1 = document.getElementById("campo1").value;
    var texto2 = document.getElementById("campo2").value;
    var texto3 = document.getElementById("campo2").value;

    if (texto1.lenght == 0 && texto2.lenght == 0) {
        if (texto3.lenght>0) {
            alert("Excelente!")
        }
        else{
            alert("Debes escribir algo en el campo 1 y 2");
        }
    }
    else{
        alert("Excelente!")
    }

    return false;
}