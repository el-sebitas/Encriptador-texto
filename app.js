const wordEncript = document.querySelector('.word-encript');
const text = document.querySelector('.mensaje');

function encriptar(wordEncript2) {
    let result = '';
    // Con la variable wordEncript2 iteramos sobre esta y cuando llegamos a las vocales
    // cambiamos estas por su valor encriptado siendo result el encriptado
    for (let i = 0; i <= wordEncript2.length-1; i++) {
        if (wordEncript2[i] == 'a') {
            result += 'ai';
        } else if (wordEncript2[i] == 'e') {
            result += 'enter';
        } else if (wordEncript2[i] == 'i') {
            result += 'imes';
        } else if (wordEncript2[i] == 'o') {
            result += 'ober';
        } else if (wordEncript2[i] == 'u') {
            result += 'ufat';
        } else {
            result += wordEncript2[i];
        }
    }
    //value.innerHTML = result;
    return result;
}

function desencriptar(wordEncript2){
    let result = '';
    let iter = 0;
    // Con wordEncript2 iteramos sobre las vocales, como estas estan encriptadas,
    // solo tomamos su caracter inicial, por ejemplo "ufat" solo toamos u
    // e incertamos los caracteres en result, con iter adelantamos la iteracion para saltarnos
    // el valor encriptado
    for (let i=0; i <= wordEncript2.length-1; i+=iter) {
        if (wordEncript2[i] == 'a') {
            iter = 2;
        } else if (wordEncript2[i] == 'e') {
            iter = 5;
        } else if (wordEncript2[i] == 'i') {
            iter = 4;
        } else if (wordEncript2[i] == 'o') {
            iter = 4;
        } else if (wordEncript2[i] == 'u') {
            iter = 4;
        } else {
            iter = 1;
        }
        result += wordEncript2[i];
    }
    //value.innerHTML = result;
    return result;
}

function boton_encriptar(){
    text.value = encriptar(wordEncript.value);
    wordEncript.value = '';
}

function boton_desencriptar(){
    text.value = desencriptar(wordEncript.value);
    wordEncript.value = '';
}

function copiar(){
    text.select();
    navigator.clipboard.writeText(mensaje.value)
    alert("Texto Copiado")
}