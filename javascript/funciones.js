function descifrarMensaje() {
    let texto = document.getElementById('mensajeCifrado').value;
    let nuevoTexto = '';

    for(let i = 0; i < texto.length; i++){
        let textoAux = '';
        if (texto[i] != '('){
            nuevoTexto += texto[i];
        }
        else{
            let j = i + 1;
            for(; texto[j] != ')'; j++){
                textoAux += String(texto[j]);
            }
            textoAux = invertirTexto(textoAux);
            nuevoTexto += textoAux;
            i = j;
        }
    }
    alert('El mensaje es: ' + nuevoTexto)
   }

function invertirTexto(textoAInvertir){
    return textoAInvertir.split("").reverse().join("");
}