import { validarToken } from '../peticiones/fetchValidate.js';
import { categoriasFetch } from '../peticiones/fetchCategorias.js';
import { registroServicio } from '../peticiones//fetchServicios.js';
import { alertSweet, confirmSweet} from '../helpers/alerts.js';


const verificarToken = async (  ) => {
    
    const token = JSON.parse( localStorage.getItem('ixtapp-token') );
    const msg = await validarToken( token );
    if( msg.err === 'Ok') {
        return initPerfil(msg);
    }else {
        location.href ='/';
    }
    
}

const initPerfil = async ( { authUser } ) => {
    const {correo, direccion,  nombreUsuario, telefono, uid} = authUser;

    $('#usuario').val(nombreUsuario);
    $('#correo').val(correo);
    $('#telefono').val(telefono);
    $('#calle').val(direccion.calle);
    $('#colonia').val(direccion.colonia);
    $('#numeroint').val(direccion.numero);
    $('#estado').val(direccion.estado);
    $('#cp').val(direccion.cp);
    $('#referencia').val(direccion.referencia);
    $('#idUsuario').val( uid );
    $('#nombrePerfil').text(nombreUsuario);

    categorias( uid )
}

const categorias = async ( idUser ) => {
    const token = JSON.parse( localStorage.getItem('ixtapp-token') );
    const categoria = await categoriasFetch(token);
    const formServicios = $('#formServicios');
    const btnAgregar = $('#btnAgregar');

    
    const categoriaSelect = $('#categorias');
    categoria.services.forEach( cat => {
        categoriaSelect.append($("<option>", {
            value: cat.sid,
            text: cat.nombreCategoria
        }));
    })

    btnAgregar.on('click', () => {
        formServicios.validate({

            messages: {
                categorias: "Debes seleccionar una categoria",
                nombreServicio: "Debes ingresar el nombre del servicio",
                descripcionServicio: "Debes ingresar la descripcion del servicio",
            }

        });
        if ( formServicios.valid() ) {
            const nCategoria = categoriaSelect.val();
            const nombreServicio = $('#nombreServicio').val();
            const descripcion = $('#descripcionServicio').val();
            const data = {
                nombreServicio,
                nCategoria,
                usuario: idUser,
                descripcion
            }

            guardarCategoria( data , token)
        }
    })
}

const guardarCategoria = async (idUser, token) => {
    const resp = await registroServicio( idUser, token );
    alertSweet('Servicio Agregado Correctamente')
        .then((result) => {
            if(result.value){
                location.reload();
            }
        })
    
}

const editarPerfil = async () => {
    const btnEditar = $('#btnEditar');
    const formEditar = $('#formEditarPerfil');
    btnEditar.on('click', () => {
        formEditar.validate({
            messages: {
                usuario: "Debes ingrear un nombre",
                correo: "Debes ingresar un email válido",
                telefono: "Debes ingresar un número",
                calle: "Debes ingresar la calle ",
                numeroint: "Debes ingresar el número",
                colonia: "Debes ingresar una colonia",
                estado: "Debes ingresar el estado",
                cp: "Debes ingresar el Código Postal",
                telefono: "Debes ingresar un número telefonico",
            }
        });

        if (formEditar.valid()) {
            const usuario    = $('#usuario').val();
            const referencia = $('#referencia').val();
            const idUser = $('#idUser').val()
            const data = {
                usuario,
                referencia
            }

        }
    })
}

editarPerfil();
verificarToken();