Desencriptador.addEventListener('click', event => {
    event.preventDefault();
    let text = Form.elements['textarea1'].value;
    let desencriptar = text;
    let index = 0;
    for(let propiedad in REGP) {
        desencriptar = desencriptar.replace(REGP[propiedad], LETRAS[index]);
        index++;
    }

    console.log(desencriptar);
    
    if(desencriptar != ""){
        mostrarTxt(desencriptar);
    }
});
