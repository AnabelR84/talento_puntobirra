const formulario = document.getElementById("miFormulario");
console.log(formulario);


formulario.addEventListener("submit", eventoEnviar => {

    eventoEnviar.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const contraseña = document.getElementById('contraseña').value;

    console.log(nombre);
    console.log(apellido);
    console.log(email); 
    console.log(contraseña)
    console.log(mensaje);

    const errorNombre = document.getElementById("errorNombre"); 
    const errorApellido = document.getElementById("errorApellido"); 
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");
    const errorPassword = document.getElementById('errorContraseña');
   



    let formularioValido = true;

    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    if (apellido === "") {
        errorApellido.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorApellido.classList.add("d-none");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    if (mensaje.length < 16) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (contraseña.length < 8) {
        errorContraseña.textContent = "La contraseña debe tener al menos 8 caracteres.";
        errorContraseña.classList.remove("d-none");
        formularioValido = false;
    }
    else if (!contraseñaRegex.test(contraseña)) {
        errorContraseña.textContent = "La contraseña debe tener: una mayúscula, una minúscula, un número y un carácter especial.";
        errorContraseña.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorContraseña.classList.add("d-none"); };

/*
        const formularioContacto = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contraseña:contraseña,
            mensaje: mensaje

        };
        *llamariamos a un Api de un backend y le enviariamos la información */
});

const botonLimpiar = document.getElementById('limpiarFormulario');

    botonLimpiar.addEventListener('click', function () {
        // Limpiar campos específicos
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    });