import Swal from 'sweetalert2'


export function validarMascota(mascota){
    if(mascota.trim() && isNaN(mascota)){
        return true
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'X!',
            text: 'Escribe un nombre adecuado',
          })
          return false
    }
}

export function validarDuenio(duenio){
    if(duenio.trim() && isNaN(duenio)){
        return true
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'X!',
            text: 'Escribe un nombre adecuado',
          })
          return false
    }
}

export function validarFecha(fecha){
    // const regEx = /^(0[1-9]|[12]\d|3[01])[\/\-\.](0[1-9]|1[0-2])[\/\-\.](19|20)\d{2}$/g;
    if(fecha.trim() && fecha.length === 10
    // && regEx.test(fecha)
    ){
        return true
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Escribe una fecha correcta',
            text: "Debe seguir el formato dd/mm/yyyy",
          })
          return false
    }
}

export function validarHora(hora){
    const regEx = /^(((0|1)[0-9])|2[0-3]):[0-5][0-9]$/;
    if(hora.trim() && regEx.test(hora)){
        return true
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Escribe una hora correcta!',
            text: 'Debe seguir el formato hh:mm',
          })
          return false
    }
}

export function validarSintoma(sintoma){
    if(sintoma.trim() && sintoma.length >= 5 && sintoma.length <= 25){
        return true
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Escribe algo breve!',
            text: 'Debe ser mayor a 4 y menor a 26 constras',
          })
          return false
    }
}


