/*Se copia al portapapeles el contenido encriptado/descencriptado del textarea2 */
Copiar.addEventListener('click', () => {
    let content = document.getElementById('textarea2');
    content.select();
    document.execCommand('copy');
});
