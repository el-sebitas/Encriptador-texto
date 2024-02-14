let wordEncriptTask = 'abril es un mes';
console.log(wordEncriptTask);
console.log(encriptar(wordEncriptTask));
console.log(desencriptar(encriptar(wordEncriptTask)));

function encriptar(wordEncript) {
    let result = '';
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
    return result;
}

function desencriptar(wordEncript){
    let result = '';
    let iter = 0;
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
    return result;
}