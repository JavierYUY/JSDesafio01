//variables de reserva
let lunesMan = false;
let lunesTar = false;
let martesMan = false;
let martesTar = false;
let miercolesMan = false;
let miercolesTar = false;
let juevesMan = false;
let juevesTar = false;
let viernesMan = false;
let viernesTar = false;

let dia = "";
let hora = "";
let seguir = "";

do{
    //pregunto dia y hora
    dia = prompt("Ingrese el Dia de la reserva (lunes - martes - miercoles - jueves - viernes - Fin para cerrar)");
    hora = prompt("Ingrese hora de la reserva (mañana - tarde)");

    //me fijo si hay reserva para ese dia y hora
    switch (dia) {
        case "lunes":
            if(lunesMan == false || lunesTar == false){
                if (hora == "mañana") {
                    console.log('lunes mañana')
                    if (lunesMan == false) {
                        lunesMan = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    console.log('lunes tarde')
                    if (lunesTar == false) {
                        lunesTar = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "martes":
            if(martesMan == false || martesTar == false){
                if (hora == "mañana") {
                    if (martesMan == false) {
                        martesMan = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (martesTar == false) {
                        martesTar = true;
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "miercoles":
            if(miercolesMan == false || miercolesTar == false){
                if (hora == "mañana") {
                    if (miercolesMan == false) {
                        miercolesMan = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (miercolesTar == false) {
                        miercolesTar = true;
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "jueves":
            if(juevesMan == false || juevesTar == false){
                if (hora == "mañana") {
                    if (juevesMan == false) {
                        juevesMan = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (juevesTar == false) {
                        juevesTar = true;
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "viernes":
            if(viernesMan == false || viernesTar == false){
                if (hora == "mañana") {
                    if (viernesMan == false) {
                        viernesMan = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (viernesTar == false) {
                        viernesTar = true;
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        default:
            alert("Opcion no valida");
            break;
    }

    seguir = prompt("Desea Seguir? (Si - No)")
}while(seguir == "Si");

alert("Muchas Gracias");
