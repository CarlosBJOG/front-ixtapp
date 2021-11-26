const validarToken = async ( token = {} ) => {
    const url = 'https://50ee-187-191-31-253.ngrok.io/api/auth/verifyJWT'
    const datos = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token
                    }
                });
    return await datos.json();
}

export {
    validarToken,
}

