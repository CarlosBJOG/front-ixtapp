const categoriasFetch = async( token ) => {

    const url = 'https://50ee-187-191-31-253.ngrok.io/api/serviceTypes'
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
    categoriasFetch
}