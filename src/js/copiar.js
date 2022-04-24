Copiar.addEventListener('click', () => {
    let content = document.getElementById('textarea2');
    content.select();
    document.execCommand('copy');
});
