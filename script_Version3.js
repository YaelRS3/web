// Script para mostrar mensaje de éxito al enviar el formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formMsg.textContent = "¡Gracias por tu mensaje! Pronto te responderé.";
        form.reset();
        setTimeout(() => {
            formMsg.textContent = '';
        }, 5000);
    });
});