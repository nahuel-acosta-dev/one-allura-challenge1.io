/*Al tocar el boton encriptar se reccorre el texto ingresado por la persona 
y se van reemplazando los letras a encriptar por las palabras que necesitemos("ai"-"enter"-etc.).*/

Encriptador.addEventListener('click', event => {
    event.preventDefault();
    let text = Form.elements['textarea1'].value;
    let encriptar = '';

    for(let i = 0;i < text.length;i++) {
       switch (text[i]){
           case 'a':
               encriptar += "ai";
               break;
            case 'e':
                encriptar += "enter";
                break;
            case 'i':
                encriptar += "imes";
                break;
            case 'o':
                encriptar += "ober";
                break;
            case 'u':
                encriptar += "ufat";
                break;
            default:
                encriptar += text[i];
       }
    }

    if(encriptar != ""){
        return mostrarTxt(encriptar);
    }
});




