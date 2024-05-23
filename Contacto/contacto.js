function validateForm(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const consulta = document.getElementById('consulta');
    const mensaje = document.getElementById('mensaje');
    let valid = true;

    const namePattern = /^[a-zA-Z\s]+$/;

    if (nombre.value === '' || !namePattern.test(nombre.value)) {
        nombre.classList.add('error');
        valid = false;
    } else {
        nombre.classList.remove('error');
    }

    if (email.value === '') {
        email.classList.add('error');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
    } else {
        email.classList.remove('error');
    }

    if (telefono.value === '') {
        telefono.classList.add('error');
        valid = false;
    } else if (!/^\d{10}$/.test(telefono.value)) {
        telefono.classList.add('error');
        valid = false;
    } else {
        telefono.classList.remove('error');
    }

    if (consulta.value === '') {
        consulta.classList.add('error');
        valid = false;
    } else {
        consulta.classList.remove('error');
    }

    const mensajeValue = mensaje.value.trim();
    const wordCount = mensajeValue.split(/\s+/).length;
    if (mensajeValue === '' || wordCount < 2) {
        mensaje.classList.add('error');
        valid = false;
    } else {
        mensaje.classList.remove('error');
    }

    if (valid) {
        alert('Formulario enviado con éxito.');
        document.querySelector('form').submit();
    } else {
        alert('Por favor, complete los campos requeridos correctamente.');
    }
}

window.onload = function() {
    document.querySelector('form').addEventListener('submit', validateForm);
};