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
