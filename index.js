const iva = a => a * 0.21;
const certificadoImpreso = a => a * 0.1;
const suma = (a, b, c) => a + b + c;

let nombreCliente;
let seleccionLista;
let costoCursoEntrenamientoFuncional = 2000;
let costoCursoRitmosLatinos = 1500;

let lista =
    "Lista de Opciones\n";
lista += "1. Comprar curso\n";
lista += "2. Salir\n";
lista += "Elija una opccion\n";

let cursos =
    "Lista de Cursos\n";
cursos += "1. Entrenamiento funcional\n";
cursos += "2. Ritmos Latinos\n";
cursos += "Elija una opccion\n";

seleccionLista = 0;
seleccionCursos = 0;

nombreCliente = prompt("Ingrese su nombre");
seleccionLista = parseInt(prompt("Buenas " + nombreCliente + " : \n" + lista));
while (seleccionLista != 2) {
    seleccionCursos = parseInt(prompt(cursos))
    if (seleccionCursos == 1) {
        alert("El costo del curso con iva y certificado impreso es : " + suma(costoCursoEntrenamientoFuncional, iva(costoCursoEntrenamientoFuncional), certificadoImpreso(costoCursoEntrenamientoFuncional)))
    }
    else if (seleccionCursos == 2) {
        alert("El costo del curso con iva y certificado impreso es : " + suma(costoCursoRitmosLatinos, iva(costoCursoRitmosLatinos), certificadoImpreso(costoCursoRitmosLatinos)))
    }
    else {
        alert("El numero seleccionado no pertenece a la lista");
        seleccionLista = 2;
    }
}
alert("Gracias por visitarnos");

