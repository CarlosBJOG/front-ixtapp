import {registro} from '../peticiones/fetchRegister.js';
import {validarRegistro} from '../helpers/register-validation.js';
import {alertSweet} from '../helpers/alerts.js'

const initRegister = () => {
 
    const btnRegistro = document.getElementById('btnRegistro');
    btnRegistro.onclick = async (e) => {
        e.preventDefault();
        const values = validarRegistro();
        console.log(values);
        if(!values) return alertSweet('Debes completar los cmapos requeridos', 'warning');
        await registro(values);
        return alertSweet('Usuario Creado Correctamente')
            .then((result) => {
                if(result.value) location.href = '/login';
            })
    }

}





initRegister()