
const iniciarSesion = async ( data = '') => {
    const url = 'https://50ee-187-191-31-253.ngrok.io/api/auth/login'
    const datos = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( data )
                });
    return await datos.json();
}

export {
    iniciarSesion
}