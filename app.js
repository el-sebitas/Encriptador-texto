const wordEncript = document.getElementById('wordEncript');
const text = document.getElementById('text');
let sin_resultado_ntf = document.getElementById('sin_resultado_ntf');
let mensaje_resultado = document.getElementById('mensaje_resultado');
sin_resultado_ntf.style.display = 'block';
mensaje_resultado.style.display = 'none';


function encriptar(wordEncript2) {
    let result = '';
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
    return result;
}

function desencriptar(wordEncript2){
    let result = '';
    let iter = 0;
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
    return result;
}

function mostrarResultado() {
    sin_resultado_ntf.style.display = 'none';
    mensaje_resultado.style.display = 'block';
}

function boton_encriptar(){
    mostrarResultado();
    text.value = encriptar(wordEncript.value);
    wordEncript.value = '';
}

function boton_desencriptar(){
    mostrarResultado();
    text.value = desencriptar(wordEncript.value);
    wordEncript.value = '';
}

function copiar(){
    text.select();
    navigator.clipboard.writeText(text.value)
    alert("Texto Copiado")
}