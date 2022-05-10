/*Al tocar el boton desencriptar se recorre la constante objecto REGP, 
y se van reemplazando con regex de la palabra dada por el usuario (variable desencriptar) 
todas las subcadenas que coincidan con los regex de REGP.*/

Desencriptador.addEventListener('click', event => {
    event.preventDefault();
    let text = Form.elements['textarea1'].value.toLowerCase();
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
