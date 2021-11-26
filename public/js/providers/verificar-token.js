import {menuButtonsHide, menuBotonsShow} from '../helpers/token-validate.js';
import { validarToken } from '../peticiones/fetchValidate.js';

const setTokenLocalStorages = async (  ) => {
    
    const token = JSON.parse( localStorage.getItem('ixtapp-token') );
    const msg = await validarToken( token );
    if( msg.err === 'Ok') {
        menuButtonsHide(); 
    }else {
        menuBotonsShow();
    }
    
}

setTokenLocalStorages();

