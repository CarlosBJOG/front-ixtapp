const registroServicio = async ( data = {}, token ) => {
    const url = 'https://50ee-187-191-31-253.ngrok.io/api/service'
    const datos = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token
                    },
                    body: JSON.stringify( data )
                });

    return await datos.json();
}

const cargarTrabajos =async ( token ) => {
    const url = 'http://192.168.31.130:8080/api/service'
    const datos = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token
                    }
                });

    return await datos.json();

}

export {
    registroServicio,
    cargarTrabajos
}

