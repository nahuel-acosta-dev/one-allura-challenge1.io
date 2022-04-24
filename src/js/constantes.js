const Form = document.querySelector('#formulario');
const Encriptador = document.querySelector('#btn-encriptador');
const Desencriptador = document.querySelector('#btn-desencriptador');
const Copiar = document.querySelector('#btn-copiar');

const REGP = {
    ai: new RegExp('ai', 'g'),
    enter: new RegExp('enter', 'g'),
    imes: new RegExp('imes', 'g'),
    ober: new RegExp('ober', 'g'),
    ufat: new RegExp('ufat', 'g')
}

const LETRAS = ['a', 'e', 'i', 'o', 'u'];