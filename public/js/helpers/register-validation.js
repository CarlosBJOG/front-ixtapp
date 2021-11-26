

const validarRegistro = () => {

    const formRegistro = $('#formRegistro');

    formRegistro.validate({
        messages: {
            usuario: "Debes ingrear un nombre",
            email: "Debes ingresar un email válido",
            password: "Debes ingresar una contraseña",
            calle: "Debes ingresar la calle ",
            numeroDireccion: "Debes ingresar el número",
            colonia: "Debes ingresar una colonia",
            estado: "Debes ingresar el estado",
            cp: "Debes ingresar el Código Postal",
            telefono: "Debes ingresar un número telefonico",
        }
    });

    if(formRegistro.valid()){
        return crearDataRegistro();
    }

}

const crearDataRegistro = () => {
    const nombreUsuario = document.getElementById('usuario').value,
            correo     = document.getElementById('email').value,
            password   = document.getElementById('password').value,
            calle      = document.getElementById('calle').value,
            numero     = document.getElementById('numeroDireccion').value,
            colonia    = document.getElementById('colonia').value,
            estado     = document.getElementById('estado').value,
            cp         = document.getElementById('cp').value,
            referencia = document.getElementById('referencia').value,
            telefono   = document.getElementById('telefono').value;   

    const data =  { nombreUsuario, correo, password,
        direccion: {
            calle,
            numero,
            colonia,
            estado,
            cp,
        },
        telefono
    }
    if(referencia === '') return data;
    else
        data.referencia = referencia;
        return data;
    
}


export {
    validarRegistro
}