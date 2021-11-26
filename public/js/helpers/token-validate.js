const menuButtonsHide = () => {

    $('#navLogin').hide();
    $('#navRegistro').hide();
    $('#navPerfil').show();
    $('#navLogOut').show();

}

const menuBotonsShow = () => {
    $('#navLogin').show();
    $('#navRegistro').show();
    $('#navPerfil').hide();
    $('#navLogOut').hide();
    
}

export {
    menuButtonsHide,
    menuBotonsShow
}