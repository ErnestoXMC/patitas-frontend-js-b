const result = JSON.parse(localStorage.getItem('result'));

window.addEventListener('load', ()=>{

    const msgSuccess = document.querySelector('#msgSuccess');

   mostrarAlerta(`Bienvenido ${result.nombreUsuario}`);

   const btnCerrar = document.querySelector('#btn-cerrar');

   btnCerrar.addEventListener('click', cerrarSesion);

})

function mostrarAlerta(mensaje) {
    msgSuccess.innerHTML = mensaje;
    msgSuccess.style.display = 'block';
}
function ocultarAlerta() {
    msgSuccess.innerHTML = '';
    msgSuccess.style.display = 'none';
}


async function cerrarSesion(){
    
    const url = 'http://localhost:8082/login/cerrar-sesion-async';

    const request = {
        tipoDocumento : result.tipoDocumento,
        numeroDocumento : result.numeroDocumento,
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        if(!response.ok){
            mostrarAlerta('Error: Ocurrio un problema con la autenticación');
            throw new Error(`Error: ${response.statusText}`);
        }

        
        const result = await response.json();

        console.log(`Respuesta del servidor: ${result}`);
        
        window.location.replace('index.html');
        
    } catch (error) {
        console.log('Error: Ocurrio un problema con la autenticacion, enviado desde el catch', error);
        mostrarAlerta('Error: Ocurrio un problema con la autenticacion');
    }


}








