import {iniciarSesion} from '../peticiones/fetchLogin.js';
import {validarLogin} from '../helpers/login-validator.js';
import { alertSweet, confirmSweet } from '../helpers/alerts.js';

const initLogin = () => {
    
    const btnLogin = document.getElementById('btnLogin');
    btnLogin.onclick = async (e) => {
        e.preventDefault();
        const values = validarLogin();
        if(!values) return alert('Usuario no valido')
        
        const usuario = await iniciarSesion(values);
        if(Object.keys(usuario).length === 1) return alertSweet('Usuario o Password incorrectos', 'warning');
        setTokenLocalStorages(usuario);
        return alertSweet('Inicio de sesion correcto')
            .then( ( result ) => {
                if(result.value)  location.href = '/';
            } );
      
    }

}

const setTokenLocalStorages = ( usuarioVerificado ) => {
    
    localStorage.setItem('ixtapp-token', JSON.stringify(usuarioVerificado.token));
}
 initLogin()
