const form = document.querySelector('#formulario');
const Encriptador = document.querySelector('#btn-encriptador');
const Desencriptador = document.querySelector('#btn-desencriptador');

Encriptador.addEventListener('click', event => {
    event.preventDefault();
    let text = form.elements['texto'].value;
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


Desencriptador.addEventListener('click', event => {
    event.preventDefault();
    let text = form.elements['texto'].value;
    let desencriptar = text;
    let index = 0;
    for(let propiedad in REGP) {
        desencriptar = desencriptar.replace(REGP[propiedad], LETRAS[index]);
        index++;
    }
    if(desencriptar != ""){
        mostrarTxt(desencriptar);
    }
});

const mostrarTxt = (txt) =>{
    let figura = document.querySelector("#cont-figura");
    let contTexto = document.querySelector("#cont-text");
    let texto = document.querySelector("#mostrar-text");
    let vstEnc = document.querySelector(".vst-encriptador");

    console.log(figura)
    figura.style.display = "none";
    vstEnc.style.paddingTop = '2%';
    contTexto.style.display = "block";
    texto.outerHTML = txt;
}

