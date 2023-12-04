const url = 'https://api-acudiente.onrender.com/acudiente '
//const url = 'http://localhost:8585/acudiente'
const regresarListar = () => {
    window.location.href = 'index.html';
}
const listarAcudiente = async () => {
    let objectId = document.getElementById('contenido')
    let contenido = '';
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((res) => res.json())
        .then(function (data) {
            let listarAcudiente = data.msg

            listarAcudiente.map(function (acudientes) {
                objectoAcudiente = Object.keys(acudientes).map(key => key + '=' + encodeURIComponent(acudientes[key])).join('&')

                contenido = contenido + '<tr>' +
                    `<td>` + acudientes.nombreCompleto + `</td>` +
                    `<td>` + acudientes.tipoDocumento + '</td>' +
                    `<td>` + acudientes.documento + `</td>` +
                    `<td>` + acudientes.parentesco + `</td>` +
                    `<td>` + acudientes.estado + `</td>` +
                    `<td>` + acudientes.telefono + `</td>` +
                    `<td>` + acudientes.observacion + `</td>` +
                    `<td> <button type="button" onclick="redirreccionarEditar('${objectoAcudiente}')" class="btn btn-primary">Editar</button></td>` +
                    `<td> <button type="button" onclick=" confirmarEliminar('${acudientes.nombreCompleto}')"" class="btn btn-danger">Eliminar</button></td>` +

                    `</tr>`
            })


            objectId.innerHTML = contenido


        })
}

const registrarUsuario = () => {
    const nombre = document.getElementById('Nombre').value;
    const tipos = document.getElementById('tipo').value
    const documento = document.getElementById('documento').value
    const parentescos = document.getElementById('Parentesco').value
    const estados = document.getElementById('estado').value
    const telefono = document.getElementById('Telefono').value
    const fecha = document.getElementById('Fecha').value
    const direccion = document.getElementById('Direccion').value
    const ciudad = document.getElementById('ciudad').value
    const observacion = document.getElementById('observaciones').value



    if (nombre.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if (documento.length == 0) {
        document.getElementById('documentoHelp').innerHTML = 'Dato requerido'
    }
    else if (tipos == 0) {
        document.getElementById('tipoHelp').innerHTML = 'Dato requerido'
    }
    else if (estados == 0) {
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if (parentescos == 0) {
        document.getElementById('parentescoHelp').innerHTML = 'Dato requerido'
    }
    else if (telefono == 0) {
        document.getElementById('telefonoHelp').innerHTML = 'Dato requerido'
    }
    else if (fecha == 0) {
        document.getElementById('fechaHelp').innerHTML = 'Dato requerido'
    }
    else if (direccion == 0) {
        document.getElementById('direcionHelp').innerHTML = 'Dato requerido'
    }
    else if (ciudad == 0) {
        document.getElementById('ciudadHelp').innerHTML = 'Dato requerido'
    }
    else if (observacion == 0) {
        document.getElementById('observacionesHelp').innerHTML = 'Dato requerido'
    }
    else {
        let Acudiente = {
            nombreCompleto: nombre, //lo primero es la clave, lo segundo es lo que se va a enviar.
            tipoDocumento: tipos,
            documento: documento,
            parentesco: parentescos,
            estado: estados,
            telefono: telefono,
            fechaNacimiento: fecha,
            direccion: direccion,
            ciudad: ciudad,
            observacion: observacion

        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(Acudiente), //Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: (json.msg),
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    regresarListar();
                }, 1000);



            })

    }

}


const actualizarUsuario = () => {
    const nombre = document.getElementById('Nombre').value;
    const tipos = document.getElementById('tipo').value
    const documento = document.getElementById('documento').value
    const parentescos = document.getElementById('Parentescos').value
    const estados = document.getElementById('estados').value
    const telefono = document.getElementById('Telefono').value
    const fecha = document.getElementById('Fecha').value
    const direccion = document.getElementById('Direccion').value
    const ciudad = document.getElementById('ciudad').value
    const observacion = document.getElementById('observaciones').value




    if (nombre.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if (documento.length == 0) {
        document.getElementById('documentoHelp').innerHTML = 'Dato requerido'
    }
    else if (tipos == 0) {
        document.getElementById('tipoHelp').innerHTML = 'Dato requerido'
    }
    else if (estados == 0) {
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if (parentescos == 0) {
        document.getElementById('parentescoHelp').innerHTML = 'Dato requerido'
    }
    else if (telefono == 0) {
        document.getElementById('telefonoHelp').innerHTML = 'Dato requerido'
    }
    else if (fecha == 0) {
        document.getElementById('fechaHelp').innerHTML = 'Dato requerido'
    }
    else if (direccion == 0) {
        document.getElementById('direcionHelp').innerHTML = 'Dato requerido'
    }
    else if (ciudad == 0) {
        document.getElementById('ciudadHelp').innerHTML = 'Dato requerido'
    }
    else if (observacion == 0) {
        document.getElementById('observacionesHelp').innerHTML = 'Dato requerido'
    }
    else {
        let Acudiente = {
            nombreCompleto: nombre, //lo primero es la clave, lo segundo es lo que se va a enviar.
            tipoDocumento: tipos,
            documento: documento,
            parentesco: parentescos,
            estado: estados,
            telefono: telefono,
            fechaNacimiento: fecha,
            direccion: direccion,
            ciudad: ciudad,
            observacion: observacion

        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(Acudiente), //Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: (json.msg),
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    regresarListar();
                }, 1000);


                //Imprimir el mensaje de la transacción
            })
    }

}


const redirreccionarEditar = (acudiente) => {
    document.location.href = "editarAcudiente.html?acudientes" + acudiente
}

const editarAcudiente = () => {
    var urlparams = new URLSearchParams(window.location.search);

    document.getElementById('Nombre').value = urlparams.get('nombreCompleto');
    document.getElementById('tipo').value = urlparams.get('tipoDocumento');
    document.getElementById('documento').value = urlparams.get('documento');
    document.getElementById('Parentescos').value = urlparams.get('Parentesco');
    document.getElementById('estados').value = urlparams.get('estado');
    document.getElementById('Telefono').value = urlparams.get('telefono');
    document.getElementById('Fecha').value = urlparams.get('fechaNacimiento');
    document.getElementById('Direccion').value = urlparams.get('direccion');
    document.getElementById('ciudad').value = urlparams.get('ciudad');
    document.getElementById('observaciones').value = urlparams.get('observacion');

}

if (document.querySelector('#btnRegistrar')) { //Si objeto exitste
    document.querySelector('#btnRegistrar')
        .addEventListener('click', registrarUsuario)

}

if (document.querySelector('#btnActualizar')) {//Si objeto existe
    document.querySelector('#btnActualizar')
        .addEventListener('click', actualizarUsuario)

}


const eliminarAcudiente = async (nombreCompleto) => {
    try {
        const deleteUrl = `${url}`;  // Solo la ruta base, ya que el ID irá en el cuerpo de la solicitud

        const response = await fetch(deleteUrl, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ nombreCompleto })  // Incluye el ID en el cuerpo de la solicitud
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar. Código de respuesta: ${response.status}`);
        }

        const json = await response.json();
        Swal.fire({
            position: "center",
            icon: "error",
            title: (json.msg),
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            regresarListar();
        }, 1000);

        // Puedes realizar alguna acción adicional después de eliminar, como recargar la lista de donaciones
        // por ejemplo:
        // recargarListaDonaciones();
    } catch (error) {
        console.error('Error al eliminar la Acudiente:', error.message);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario.
        alert('Error al eliminar la Acudiente. Por favor, inténtalo de nuevo más tarde.');
    }

};
function confirmarEliminar(nombreCompleto) {


    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este Acudiente?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarAcudiente(nombreCompleto);
        }
    });



}


