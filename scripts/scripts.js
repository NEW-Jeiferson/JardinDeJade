document.querySelector('#btn-modo-oscuro').addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
});


document.querySelector('#btn-cambiar-idioma').addEventListener('click', function() {
    document.body.classList.toggle('en-ingles');
});


document.querySelector('#btn-cambiar-moneda').addEventListener('click', function() {
    document.body.classList.toggle('en-dolares');
});


document.querySelectorAll('nav button').forEach(boton => {
    boton.addEventListener('click', e => {
        const cat = e.target.closest('button').dataset.categoria;
        
        document.querySelectorAll('article').forEach(tarjeta => {
            tarjeta.classList.toggle('oculto', cat !== 'todos' && tarjeta.dataset.categoria !== cat);
        });
    });
});


document.querySelectorAll('.btn-ver-mas').forEach(boton => {
    boton.addEventListener('click', e => {
        const tarjeta = e.target.closest('article');
        tarjeta.querySelectorAll('.detalles-es, .detalles-en').forEach(p => p.classList.toggle('oculto'));
    });
});