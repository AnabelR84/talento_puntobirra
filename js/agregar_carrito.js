
document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    console.log(botonesAgregar); // Verificar si los botones se detectan correctamente

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto desde los atributos del botón
            const cerveza = boton.getAttribute("data-cerveza"); // Cambiado de 'nombre' a 'cerveza'
            const precio = parseFloat(boton.getAttribute("data-precio"));

            console.log(cerveza);
            console.log(precio);

            // Recuperar carrito desde localStorage o inicializarlo
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log(carrito);

            // Agregar producto al carrito
            carrito.push({ cerveza, precio });

            // Guardar carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            // Notificar al usuario
            alert(`${cerveza} agregado al carrito.`);
        });
    });
});
