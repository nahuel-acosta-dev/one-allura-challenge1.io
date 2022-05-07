/*Al tocar el boton descencriptar se recorre la constante objecto REGP, 
y se van reemplazando con regex de la palabra dada por el usuario (variable descencriptar) 
todas las subcadenas que coincidan con los regex de REGP.*/

Desencriptador.addEventListener('click', event => {
    event.preventDefault();
    let text = Form.elements['textarea1'].value;
    let descencriptar = text;
    let index = 0;
    for(let propiedad in REGP) {
        descencriptar = descencriptar.replace(REGP[propiedad], LETRAS[index]);
        index++;
    }

    console.log(descencriptar);
    
    if(descencriptar != ""){
        mostrarTxt(descencriptar);
    }
});
