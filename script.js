// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const entradaTexto = document.querySelector(".entrada-texto");
const saidaTexto = document.querySelector(".saida-texto");

function btCriptografar() {
    const textoCriptografado = criptografar(entradaTexto.value);
    saidaTexto.value = textoCriptografado;
    textArea.value = "";
}

function btDescriptografar() {
    const textoDescriptografado = descriptografar(entradaTexto.value);
    saidaTexto.value = textoDescriptografado;
    textArea.value = "";
}


function criptografar(mensagemCriptografada) {
    let letraCriptografar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemCriptografada = mensagemCriptografada.toLowerCase();
    for(let i=0; i < letraCriptografar.length; i ++) {
        if (mensagemCriptografada.includes(letraCriptografar[i][0])) {
            mensagemCriptografada = mensagemCriptografada.replaceAll(letraCriptografar[i][0], letraCriptografar[i][1])
        }
    }
    return mensagemCriptografada;
}

function descriptografar(mensagemDescriptografada) {
    let letraCriptografar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemDescriptografada = mensagemDescriptografada.toLowerCase();
    for(let i=0; i < letraCriptografar.length; i ++) {
        if (mensagemDescriptografada.includes(letraCriptografar[i][1])) {
            mensagemDescriptografada = mensagemDescriptografada.replaceAll(letraCriptografar[i][1], letraCriptografar[i][0])
        }
    }
    return mensagemDescriptografada;
}



function copiar () {

}