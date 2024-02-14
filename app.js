encriptar();
desencriptar();

function encriptar() {
    let wordEncript = document.getElementById('wordEncript').value;
    let value = document.getElementById('text');
    let result = '';
    // Con la variable wordEncript iteramos sobre esta y cuando llegamos a las vocales
    // cambiamos estas por su valor encriptado siendo result el encriptado
    for (let i = 0; i <= wordEncript.length-1; i++) {
        if (wordEncript[i] == 'a') {
            result += 'ai';
        } else if (wordEncript[i] == 'e') {
            result += 'enter';
        } else if (wordEncript[i] == 'i') {
            result += 'imes';
        } else if (wordEncript[i] == 'o') {
            result += 'ober';
        } else if (wordEncript[i] == 'u') {
            result += 'ufat';
        } else {
            result += wordEncript[i];
        }
    }
    value.innerHTML = result;
}

function desencriptar(){
    let wordEncript = document.getElementById('wordEncript').value;
    let value = document.getElementById('text');
    let result = '';
    let iter = 0;
    // Con wordEncript iteramos sobre las vocales, como estas estan encriptadas,
    // solo tomamos su caracter inicial, por ejemplo "ufat" solo toamos u
    // e incertamos los caracteres en result, con iter adelantamos la iteracion para saltarnos
    // el valor encriptado
    for (let i=0; i <= wordEncript.length-1; i+=iter) {
        if (wordEncript[i] == 'a') {
            iter = 2;
        } else if (wordEncript[i] == 'e') {
            iter = 5;
        } else if (wordEncript[i] == 'i') {
            iter = 4;
        } else if (wordEncript[i] == 'o') {
            iter = 4;
        } else if (wordEncript[i] == 'u') {
            iter = 4;
        } else {
            iter = 1;
        }
        result += wordEncript[i];
    }
    value.innerHTML = result;
}