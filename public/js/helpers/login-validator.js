const validarLogin = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if(!email.value) { return alert('debes ingresar un email valido')}
    if(!password.value) { return alert('debes ingresar un email valido')}
    
    return { correo: email.value, password: password.value};
}

export {
    validarLogin
}