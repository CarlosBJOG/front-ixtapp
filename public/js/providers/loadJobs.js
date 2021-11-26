import { cargarTrabajos } from '../peticiones/fetchServicios.js'

const initServicio = async () => {
    const token = JSON.parse(localStorage.getItem('ixtapp-token') );
    const {services} = await cargarTrabajos( token );
    const divServicios = $('#jobContent');


    services.forEach( ( {nCategoria, nombreServicio, usuario, descripcion} ) => {
        if( nCategoria._id  ==  '61a0362264bedc347111720d'){
            console.log(nombreServicio)

            divServicios.append (` 
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/default.png" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>${nombreServicio}</h4>
                                <h5 class="subheading">Tel:${usuario.telefono}</h5>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Descripcion del empleo: ${descripcion}</p></div>
                        </div>
                    </li>`)
        }   
    })

    divServicios.append(`       <li class="timeline-inverted">
    <div class="timeline-image">
        <h4>
            Crece
            <br />
            con  
            <br />
            nosotros.
        </h4>
    </div>
</li>`)

}
initServicio()