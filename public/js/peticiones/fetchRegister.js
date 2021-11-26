const registro = async ( data = {} ) => {
    const url = 'http://192.168.31.130:8080/api/usuarios'
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
    registro
}

