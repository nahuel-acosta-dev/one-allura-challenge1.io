Copiar.addEventListener('click', () => {
    console.log('hola');
    let content = document.getElementById('mostrar-text');
    content.select();
    document.execCommand('copy');
});
