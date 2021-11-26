import { cargarTrabajos } from '../peticiones/fetchServicios.js'

const initJobs = async () => {
    
    const token = JSON.parse(localStorage.getItem('ixtapp-token') );
    const {services} = await cargarTrabajos( token );
    const divServicios = $('#serviciosContent');

  
    services.forEach( ({nombreServicio, usuario, descripcion, nCategoria}) => {
        // console.log(service)
        if( nCategoria._id  ==  '61a0360a64bedc347111720a'){

            divServicios.append (`<div class="col-sm-12  col-md-4 mb-2" >
    
            <div class="card" >
                <div class="card-body">
            
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="assets/img/default.png" alt="..." />
                    <h4 >${usuario.nombreUsuario}</h4>
                    <h5>Tel: <span class="text-info mt-1">${ usuario.telefono }</span></h5>
                    <h5>Nombre de servicio: <span class="text-info">${nombreServicio}</span></h5>
                    <h5>Detalles de servicio</h5>
                    <p>${descripcion}</p>
                    <h5>Domicilio</h5>
                    <p>${usuario.direccion.calle}, ${usuario.direccion.numero}, ${usuario.direccion.colonia},${usuario.direccion.estado}, ${usuario.direccion.cp} </p>
                    </div>
                </div>
                </div>
    
    
            </div>`)
        }   
    })
}



initJobs()
