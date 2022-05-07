
/*Al precionar el boton encriptar o descencriptar, se hace desaparecer el contenido
del cont-vst1, tanto figura como texto
*/
const mostrarTxt = (txt) =>{
    let figura = document.querySelector("#cont-vst1");
    let texto = document.querySelector("#textarea2");
    if(figura.style.display != "none"){
        let contVst2 = document.querySelector("#cont-vst2");
        figura.style.display = "none";
        contVst2.style.display = "block";
    }
    texto.value = txt;
}
