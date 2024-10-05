//*Se ejecuta cuando la pagina ha finalizado de cargar(DOM, css, img)
window.addEventListener('load', function(){
    const tipoDocumento = this.document.querySelector('#tipoDocumento');
});

document.addEventListener('DOMContentLoaded', ()=>{
    const tipoDocumento = document.querySelector('#tipoDocumento');
    const numeroDocumento = document.querySelector('#numeroDocumento');
    const password = document.querySelector('#password');
    const btnIngresar = document.querySelector('#btnIngresar');
    const msgError = document.querySelector('#msgError');
    
    btnIngresar.addEventListener('click', (e)=>{
       // validar campos del formulario
        if (tipoDocumento.value === null || tipoDocumento.value.trim() === '' ||
            numeroDocumento.value === null || numeroDocumento.value.trim() === '' ||
            password.value === null || password.value.trim() === '') {
            mostrarAlerta('Error: Debe completar correctamente sus credenciales');
            return;
        }
        ocultarAlerta();
    });
});
function mostrarAlerta(mensaje) {
    msgError.innerHTML = mensaje;
    msgError.style.display = 'block';
}
function ocultarAlerta() {
    msgError.innerHTML = '';
    msgError.style.display = 'none';
}






