function editarUsuario(idEditar)
{
    console.log(idEditar)
    /*
    PREGUNTA 3
    Capturar informacion del usuario desde base de datos y llenar
    inputs dentro de la ventana modal de editar usuario, permiter que
    el usuario pueda editar los datos. No olvida de cargar el ID en el innerHTML
    dentro del elemento H1 cuyo id es cargaId

    Los campos a editar son:
    Nro de celular
    Profesion del usuario

    El resto de campos:
    Nombre
    Apellido
    Email
    Fecha Ingreso
    Colocarlos como solo lectura (propiedad readonly en el tag HTML)
    
    */
    fetch(`/editarUsuario?idUser=${idEditar}`)
        .then(response => response.json())
        .then(data => {
            let nombreUsuario = document.getElementById('nombreUsuario')
            let apellidoUsuario = document.getElementById('apellidoUsuario')
            let emailUsuario = document.getElementById('emailUsuario')
            let fechaIngresoUsuario = document.getElementById('fechaIngresoUsuario')
            let nroCelular = document.getElementById('nroCelular')
            let profesionUsuario = document.getElementById('profesionUsuario')

            nombreUsuario.value = data.nombreUsuario
            apellidoUsuario.value = data.apellidoUsuario
            emailUsuario.value = data.emailUsuario
            fechaIngresoUsuario.value = data.fechaIngresoUsuario
            nroCelular.value = data.nroCelular
            profesionUsuario.value = data.profesionUsuario
           //console.log(nombreUsuario)
        })

    // fetch(`/editarUsuario?idUser=${idEditar}`)
    // .then(response => response.json())
    // .then(data => {
    //     let nombreUsuario = document.getElementById('nombreUsuario')
    //     let apellidoUsuario = document.getElementById('apellidoUsuario')
    //     let emailUsuario = document.getElementById('emailUsuario')
    //     let fechaIngresoUsuario = document.getElementById('fechaIngresoUsuario')
    //     let nroCelular = document.getElementById('nroCelular')
    //     let profesionUsuario = document.getElementById('profesionUsuario')

    //     nombreUsuario.value = data.nombreUsuario
    //     apellidoUsuario.value = data.apellidoUsuario
    //     emailUsuario.value = data.emailUsuario
    // })
}

function actualizarUsuario()
{
    /*
    PREGUNTA 4
    Capturar los datos de los campos input's de la ventana de editar usuario,
    el id del usuario lo puedes capturar de la carga realizada en el elemento
    H1 cuyo id es cargaId. Con los datos capturados postearlos en la base de datos
    y actualizar la informacion del usuario
    */
}