    //funcion para mostrar un confirm alert con la libreria sweet
    const confirmSweet = (title = '', text = '', confirmButtonText = '') => Swal.fire({ title, text, icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText, });

    //funcion para mostrar un alert con sweetr
    const alertSweet = ( title = '', icon = 'success') => Swal.fire({
        title,
        text: "",
        confirmButtonColor: '#3085d6',
        icon,
        confirmButtonText: '¡Entendido!'
    });

    export {
        confirmSweet,
        alertSweet
    }